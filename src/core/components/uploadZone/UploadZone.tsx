import React, { FC, useCallback, useState } from "react";

// Packages
import { Box } from "@chakra-ui/react";
import { DropzoneOptions, DropzoneState, useDropzone } from "react-dropzone";
import { v4 as uuid } from "uuid";

// My Elements
import { compressImage, generateCroppedArea, getCroppedImg, generateFileByUrlBlob } from "@/utils";
import { IGeneratedImage, AspectRatioType } from "@/shared";
import { ASPECT_RATIO } from "@/constants";
import { useUIContext } from "@/context";

interface IBtn extends Omit<DropzoneState, "getRootProps" | "getInputProps"> {
  isLoading: boolean;
}

interface UploadFilesProps {
  btn({ isLoading }: IBtn): React.ReactElement;
  dropZoneOptions?: Pick<DropzoneOptions, "multiple" | "accept" | "maxFiles">;
  aspectRatio?: AspectRatioType;
  handleOnlyOneFile?(file: IGeneratedImage): void;
  handleMultipleFiles?(files: IGeneratedImage[]): void;
}

export const UploadFiles: FC<UploadFilesProps> = ({
  dropZoneOptions = { accept: ["image/jpeg", "image/png"], maxSize: 26214400, multiple: false },
  aspectRatio = "4:3",
  btn,
  handleOnlyOneFile,
  handleMultipleFiles,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { alertDialog } = useUIContext();

  async function generateAcceptedFile({ file }: { file: File }): Promise<IGeneratedImage> {
    const zipFile = await compressImage(file);
    const src = URL.createObjectURL(zipFile);
    const pixelCrop = await generateCroppedArea(src, ASPECT_RATIO[aspectRatio]);
    const { blobUrl } = await getCroppedImg({ cropArea: pixelCrop, src });
    const fileCreated = await generateFileByUrlBlob({ blobUrl, originalFile: file });

    return {
      id: uuid(),
      originalSrc: src,
      src: blobUrl,
      originalFile: zipFile,
      point: { x: 0, y: 0 },
      rotation: 0,
      flip: { h: false, v: false },
      cropArea: pixelCrop,
      zoom: 1,
      aspectRatio: "4:3",
      file: fileCreated,
    };
  }

  async function handleFiles(files: File[]) {
    setIsLoading(true);
    const zipFiles: IGeneratedImage[] = await Promise.all(files.map(async file => generateAcceptedFile({ file })));
    handleMultipleFiles && handleMultipleFiles(zipFiles);
    setIsLoading(false);
  }

  async function handeFile(file: File) {
    setIsLoading(true);
    const zipFile: IGeneratedImage = await generateAcceptedFile({ file });
    handleOnlyOneFile && handleOnlyOneFile(zipFile);
    setIsLoading(false);
  }

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    dropZoneOptions?.multiple ? await handleFiles(acceptedFiles) : await handeFile(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, ...dropzoneState } = useDropzone({
    onDrop,

    onDropRejected: options => {
      alertDialog.onOpen({
        title: "Cantidad máxima excedida",
        desc: `El número de archivos seleccionado (${options.length}) supera la cantidad máxima permitida (${dropZoneOptions.maxFiles}), Solo se tomarán en cuenta los últimos ${dropZoneOptions.maxFiles} archivos.`,
        name: "error-upload-zone",
        role: "warning",
        priBtnLabel: "Aceptar",
        onClickPriBtn: () => {
          const files = options
            .slice(Math.max(options.length - Number(dropZoneOptions.maxFiles), 1))
            .map(fileRejection => fileRejection.file);

          handleFiles(files);
          alertDialog.onClose();
        },
      });
      console.log();
    },
    ...dropZoneOptions,
  });

  return (
    <Box maxW="max-content" {...getRootProps()}>
      <input {...getInputProps()} />
      {btn({ isLoading, ...dropzoneState })}
    </Box>
  );
};

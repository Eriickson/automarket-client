import React, { FC, useCallback, useState } from "react";

// Packages
import { Box } from "@chakra-ui/react";
import { DropzoneOptions, DropzoneState, useDropzone } from "react-dropzone";
import { v4 as uuid } from "uuid";

// My Elements
import { compressImage, generateCroppedArea, getCroppedImg } from "@/utils";
import { IGeneratedImage, AspectRatioType } from "@/shared";
import { ASPECT_RATIO } from "@/constants";

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

  async function generateAcceptedFile({ file }: { file: File }): Promise<IGeneratedImage> {
    const zipFile = await compressImage(file);
    const src = URL.createObjectURL(zipFile);
    const pixelCrop = await generateCroppedArea(src, ASPECT_RATIO[aspectRatio]);
    const { blobUrl } = await getCroppedImg({ cropArea: pixelCrop, src });

    return {
      id: uuid(),
      originalSrc: src,
      src: blobUrl,
      file,
      point: { x: 0, y: 0 },
      rotation: 0,
      flip: { h: false, v: false },
      cropArea: pixelCrop,
      zoom: 1,
      aspectRatio: "4:3",
    };
  }

  async function handleFiles(files: File[]) {
    const zipFiles: IGeneratedImage[] = await Promise.all(files.map(async file => generateAcceptedFile({ file })));
    handleMultipleFiles && handleMultipleFiles(zipFiles);
  }

  async function handeFile(file: File) {
    const zipFile: IGeneratedImage = await generateAcceptedFile({ file });
    handleOnlyOneFile && handleOnlyOneFile(zipFile);
  }

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setIsLoading(true);
    dropZoneOptions?.multiple ? await handleFiles(acceptedFiles) : await handeFile(acceptedFiles[0]);
    setIsLoading(false);
  }, []);

  const { getRootProps, getInputProps, ...dropzoneState } = useDropzone({ onDrop, ...dropZoneOptions });

  return (
    <Box {...getRootProps()}>
      <input {...getInputProps()} />
      {btn({ isLoading, ...dropzoneState })}
    </Box>
  );
};

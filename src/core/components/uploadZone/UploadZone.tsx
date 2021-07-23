import { IFile, IFileAccepted } from "@/shared";
import { compressImage, generateCroppedArea, getCroppedImg } from "@/utils";
import { Box } from "@chakra-ui/react";
import React, { FC, useCallback, useState } from "react";
import { DropzoneOptions, DropzoneState, useDropzone } from "react-dropzone";
import { v4 as uuid } from "uuid";

interface IBtn extends Omit<DropzoneState, "getRootProps" | "getInputProps"> {
  isLoading: boolean;
}

interface UploadZoneProps {
  btn({ isLoading }: IBtn): React.ReactElement;
  dropZoneOptions?: Pick<DropzoneOptions, "multiple" | "accept" | "maxFiles">;
  handleOnlyOneFile?(file: IFileAccepted): void;
  handleMultipleFiles?(files: IFileAccepted[]): void;
}

export const UploadZone: FC<UploadZoneProps> = ({
  dropZoneOptions = { accept: ["image/jpeg", "image/png"], maxSize: 26214400, multiple: false },
  btn,
  handleOnlyOneFile,
  handleMultipleFiles,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  async function generateAcceptedFile({ file }: { file: File }): Promise<IFileAccepted> {
    const zipFile = await compressImage(file);
    const src = URL.createObjectURL(zipFile);
    const pixelCrop = await generateCroppedArea(src);
    const { blobUrl } = await getCroppedImg({ pixelCrop, src });

    return { croppedArea: pixelCrop, croppedImageSrc: blobUrl, file, id: uuid(), src };
  }

  async function handleFiles(files: File[]) {
    const zipFiles: IFileAccepted[] = await Promise.all(files.map(async file => generateAcceptedFile({ file })));
    handleMultipleFiles && handleMultipleFiles(zipFiles);
  }

  async function handeFile(file: File) {
    const zipFile: IFileAccepted = await generateAcceptedFile({ file });
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
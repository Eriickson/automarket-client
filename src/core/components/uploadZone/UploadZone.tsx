import { IFile } from "@/shared";
import { compressImage } from "@/utils";
import { Box } from "@chakra-ui/react";
import React, { FC, useCallback, useState } from "react";
import { DropzoneOptions, DropzoneState, useDropzone } from "react-dropzone";

interface IBtn extends Omit<DropzoneState, "getRootProps" | "getInputProps"> {
  isLoading: boolean;
}

interface UploadZoneProps {
  btn({ isLoading }: IBtn): React.ReactElement;
  dropZoneOptions?: Pick<DropzoneOptions, "multiple" | "accept" | "maxFiles">;
  handleOnlyOneFile?(file: IFile): void;
  handleMultipleFiles?(files: IFile[]): void;
}

export const UploadZone: FC<UploadZoneProps> = ({ dropZoneOptions, btn, handleOnlyOneFile, handleMultipleFiles }) => {
  const [isLoading, setIsLoading] = useState(false);

  async function handleFiles(files: File[]) {
    const zipFiles: IFile[] = await Promise.all(
      files.map(async file => {
        const zipFile = await compressImage(file);
        const payload = { file: zipFile, src: URL.createObjectURL(zipFile) };
        return { ...payload };
      }),
    );
    handleMultipleFiles && handleMultipleFiles(zipFiles);
  }

  async function handeFile(file: File) {
    const zipFile = await compressImage(file);
    handleOnlyOneFile && handleOnlyOneFile({ file: zipFile, src: URL.createObjectURL(zipFile) });
  }

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setIsLoading(true);
    dropZoneOptions?.multiple ? handleFiles(acceptedFiles) : handeFile(acceptedFiles[0]);
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

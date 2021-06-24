import React, { FC, useCallback } from "react";
import { Button } from "@chakra-ui/react";

import { useDropzone } from "react-dropzone";

import { useSelectProfileImage } from "./SelectProfileImageContext";

export const UploadButton: FC = () => {
  const { onUploadFile } = useSelectProfileImage();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    onUploadFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <Button colorScheme="blue">Seleccionar</Button>
    </div>
  );
};

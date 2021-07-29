import React, { FC, useEffect, useState } from "react";

// Packages
import { useFieldArray } from "react-hook-form";
import { Box, Button, VStack } from "@chakra-ui/react";

// My Components
import { LabelInput, UploadFiles } from "@/components";
import { PreviewImageModal } from "./PreviewImageModal";

export const UploadAttachments: FC = () => {
  const { append, fields, remove } = useFieldArray({ name: "attachments" });
  const [maxFiles, setMaxFiles] = useState(3);

  useEffect(() => {
    fields.length ? setMaxFiles(3 - fields.length) : setMaxFiles(3);
  }, [fields]);

  return (
    <Box>
      <LabelInput label="Adjuntar imágenes" />
      <VStack alignItems="stretch" flexWrap="wrap" mb="3">
        {fields.map((file: any, i) => (
          <PreviewImageModal file={file} key={i} remove={() => remove(i)} />
        ))}
      </VStack>
      <UploadFiles
        btn={({ isLoading }) => (
          <Button isDisabled={fields.length >= 3} isLoading={isLoading} loadingText="Subiendo imágenes" w="full">
            Agregar imágenes
          </Button>
        )}
        dropZoneOptions={{ multiple: true, maxFiles }}
        handleMultipleFiles={files => {
          append(files);
        }}
      />
    </Box>
  );
};

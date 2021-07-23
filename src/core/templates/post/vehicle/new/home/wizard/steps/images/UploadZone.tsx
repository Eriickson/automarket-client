import { Box, GridItem, HStack, IconButton, Img, SimpleGrid } from "@chakra-ui/react";
import { IconEdit, IconTrash } from "@tabler/icons";
import React, { useState } from "react";
import { FC } from "react";
import { UploadZone as UploadZoneComponent } from "@/components";
import { IFileAccepted } from "@/shared";
import { useAction } from "@/store";

export const UploadZone: FC = () => {
  const { setNewVehicle } = useAction();

  async function handleFiles(acceptedFiles: IFileAccepted[]) {
    setNewVehicle(acceptedFiles);
  }

  return (
    <Box>
      <UploadZoneComponent
        btn={() => (
          <Box m="3" minH="52" p="3" border="2px" inset="0" borderStyle="dashed">
            Hola
          </Box>
        )}
        dropZoneOptions={{ multiple: true }}
        handleMultipleFiles={handleFiles}
      />
    </Box>
  );
};

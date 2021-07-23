import React, { FC } from "react";

// Packages
import { Box } from "@chakra-ui/react";

// My Elements
import { IGeneratedFile } from "@/shared";
import { useAction } from "@/store";

// My Components
import { UploadFiles as UploadZoneComponent } from "@/components";

export const UploadZone: FC = () => {
  const { setNewVehicle } = useAction();

  async function handleFiles(acceptedFiles: IGeneratedFile[]) {
    setNewVehicle(acceptedFiles);
  }

  return (
    <Box>
      <UploadZoneComponent
        btn={() => (
          <Box border="2px" borderStyle="dashed" inset="0" m="3" minH="52" p="3">
            Hola
          </Box>
        )}
        dropZoneOptions={{ multiple: true }}
        handleMultipleFiles={handleFiles}
      />
    </Box>
  );
};

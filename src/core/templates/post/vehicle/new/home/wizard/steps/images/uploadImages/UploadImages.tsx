import React, { FC } from "react";

// Packages
import { Button } from "@chakra-ui/react";

// My Elements
import { useAction } from "@/store";
import { IGeneratedImage } from "@/shared";

// My Components
import { UploadFiles } from "@/components";

export const UploadImages: FC = () => {
  const { setNewVehicle } = useAction();

  async function handleFiles(acceptedFiles: IGeneratedImage[]) {
    setNewVehicle(acceptedFiles);
  }

  return (
    <div>
      <UploadFiles
        btn={({ isLoading }) => (
          <Button colorScheme="success" isLoading={isLoading} loadingText={isLoading ? "Agregando..." : ""}>
            Agregar
          </Button>
        )}
        dropZoneOptions={{ multiple: true }}
        handleMultipleFiles={handleFiles}
      />
    </div>
  );
};

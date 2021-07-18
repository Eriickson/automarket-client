import { Button } from "@chakra-ui/react";
import React, { FC } from "react";
import { UploadZone } from "@/components";
import { useAction } from "@/store";
import { IFileAccepted } from "@/shared";

export const UploadImages: FC = () => {
  const { setNewVehicle } = useAction();

  async function handleFiles(acceptedFiles: IFileAccepted[]) {
    setNewVehicle(acceptedFiles);
  }

  return (
    <div>
      <UploadZone
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

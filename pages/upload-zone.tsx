import { UploadZone } from "@/components";
import { Box, Button } from "@chakra-ui/react";
import React, { FC } from "react";

const UploadZonePage: FC = () => {
  return (
    <Box>
      <UploadZone
        btn={({ isLoading }) => <Button isLoading={isLoading}>Abrir</Button>}
        dropZoneOptions={{
          multiple: true,
        }}
        handleMultipleFiles={files => {
          console.log(files);
        }}
        handleOnlyOneFile={file => {
          console.log(file);
        }}
      />
    </Box>
  );
};

export default UploadZonePage;

import React, { FC } from "react";
import { Image } from "@/components";
import { Box } from "@chakra-ui/react";

const ImagePage: FC = () => {
  return (
    <Box w="64">
      <Image
        alt="Imagen de ejemplo"
        src="http://localhost:7001/build/user/profile/resolution/bdb45bad-f5f1-4ee9-ba67-1fde76dd550f.jpg"
      />
    </Box>
  );
};

export default ImagePage;

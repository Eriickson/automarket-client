import React, { FC } from "react";
import { Image } from "@/components";
import { Box } from "@chakra-ui/react";

const ImagePage: FC = () => {
  return (
    <Box>
      <Image
        alt="Imagen de ejemplo"
        src="http://localhost:7000/out/user/profile-picture/resolution/bbdf67db-82f4-412f-ae5b-2179d8195ccf.jpg"
      />
    </Box>
  );
};

export default ImagePage;

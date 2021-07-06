import React from "react";

// Packages
import { Box, Img } from "@chakra-ui/react";

export const CoverMain = () => {
  return (
    <Box bg="white" shadow="sm">
      <Img
        display={["none", null, "block"]}
        width="full"
        src="https://mobility-observatory.arval.com/sites/default/files/styles/1440x495/public/cvo/media/images/voiture.jpg?itok=zr9FHxBo"
      />
      <Img
        display={[null, null, "none"]}
        width="full"
        src="https://www.jumpstartmag.com/wp-content/uploads/2021/02/Webp.net-compress-image-45.jpg"
      />
    </Box>
  );
};

import React from "react";

// Packages
import { Box, Img } from "@chakra-ui/react";

export const CoverMain = () => {
  return (
    <Box bg="white" shadow="sm">
      <Img
        display={["none", null, "block"]}
        src="https://nitter.hu/pic/profile_banners%2F1353650886594195459%2F1615688559%2F1500x500"
        width="full"
      />
      <Img
        display={[null, null, "none"]}
        src="https://www.jumpstartmag.com/wp-content/uploads/2021/02/Webp.net-compress-image-45.jpg"
        width="full"
      />
    </Box>
  );
};

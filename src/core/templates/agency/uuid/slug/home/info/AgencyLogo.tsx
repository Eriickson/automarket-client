import { Box, Img } from "@chakra-ui/react";
import React from "react";

export const AgencyLogo = () => {
  return (
    <Box mr="4">
      <Img
        w={["40", "44", 56, 64]}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Aspect_ratio_-_4x3.svg/800px-Aspect_ratio_-_4x3.svg.png"
      />
      {/* <Button w="full" colorScheme="pri">
                  Contactar
                </Button> */}
    </Box>
  );
};

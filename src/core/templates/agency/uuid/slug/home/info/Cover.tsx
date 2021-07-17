import { Box, Img } from "@chakra-ui/react";
import React from "react";

export const Cover = () => {
  return (
    <Box>
      <Img
        display={["none", null, null, "block"]}
        src="https://blog.nomadcredit.com/wp-content/uploads/2017/12/meik-schneider-321596-1500x500.jpg"
      />
      <Img
        display={[null, null, null, "none"]}
        src="https://imagebee.org/vehicles/ferrari-488/ferrari-488-1-1500x800.jpg"
      />
    </Box>
  );
};

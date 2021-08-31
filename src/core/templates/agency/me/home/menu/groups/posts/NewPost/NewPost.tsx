import { MenuItem, Box } from "@chakra-ui/react";
import { IconNewSection } from "@tabler/icons";
import React, { FC } from "react";

export const NewPost: FC = () => {
  return (
    <div>
      <MenuItem py="1.5">
        <Box
          alignItems="center"
          bgColor="pri.100"
          color="pri.500"
          display="flex"
          h="6"
          justifyContent="center"
          mr="1.5"
          w="6"
        >
          <IconNewSection size="1.25rem" strokeWidth={1.5} />
        </Box>
        Nueva publicación
      </MenuItem>
    </div>
  );
};

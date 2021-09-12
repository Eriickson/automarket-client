import React, { FC } from "react";

// NextJS
import Link from "next/link";

// My Elements
import { MenuItem, Box } from "@chakra-ui/react";
import { IconNewSection } from "@tabler/icons";

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
        <Link href="/post/vehicle/new">Nueva publicación</Link>
      </MenuItem>
    </div>
  );
};

import React, { FC } from "react";

import { Box } from "@chakra-ui/react";

interface PrimaryCardProps {
  notBorderTop?: boolean;
  noPadding?: boolean;
}

export const PrimaryCard: FC<PrimaryCardProps> = ({ notBorderTop, children, noPadding }) => {
  return (
    <Box
      bg="white"
      borderColor="gray.100"
      borderTopColor={!notBorderTop ? "pri.500" : ""}
      borderTopWidth={!notBorderTop ? "2px !important" : ""}
      borderWidth="1px"
      h="full"
      p={!noPadding ? 4 : 0}
      shadow="sm"
    >
      {children}
    </Box>
  );
};

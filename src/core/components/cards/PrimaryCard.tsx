import React, { FC } from "react";

import { Box } from "@chakra-ui/react";

interface PrimaryCardProps {
  notBorderTop?: boolean;
}

export const PrimaryCard: FC<PrimaryCardProps> = ({ notBorderTop, children }) => {
  return (
    <Box
      bg="white"
      borderColor="gray.100"
      borderTopColor={!notBorderTop ? "pri.500" : ""}
      borderTopWidth={!notBorderTop ? "2px !important" : ""}
      borderWidth="1px"
      h="full"
      p="4"
      shadow="sm"
    >
      {children}
    </Box>
  );
};

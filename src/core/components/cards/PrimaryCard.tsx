import React, { FC } from "react";

import { Box } from "@chakra-ui/react";

interface PrimaryCardProps {
  notBorderTop?: boolean;
}

export const PrimaryCard: FC<PrimaryCardProps> = ({ notBorderTop, children }) => {
  return (
    <Box
      bg="white"
      borderWidth="1px"
      borderColor="gray.100"
      shadow="sm"
      p="4"
      borderTopWidth={!notBorderTop ? "2px" : ""}
      borderTopColor={!notBorderTop ? "pri.500" : ""}
    >
      {children}
    </Box>
  );
};

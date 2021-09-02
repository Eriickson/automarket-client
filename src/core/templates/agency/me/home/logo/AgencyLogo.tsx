import React, { FC } from "react";

// Packages
import { Box, Img } from "@chakra-ui/react";

// My Components
import { PrimaryCard } from "@/components";
import { UpdateAgencyLogo } from "./UpdateAgencyLogo";

export const AgencyLogo: FC = () => {
  return (
    <PrimaryCard>
      <Box position="relative">
        <Img shadow="sm" src="https://upload.wikimedia.org/wikipedia/en/6/68/TLS_Agency_logo.jpg" />
        <Box bottom="0" position="absolute" right="0">
          <UpdateAgencyLogo />
        </Box>
      </Box>
    </PrimaryCard>
  );
};

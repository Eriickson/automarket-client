import { PrimaryCard } from "@/components";
import { MainLayout } from "@/layouts";
import { Box } from "@chakra-ui/react";
import React, { FC } from "react";
import { Cover } from "./info/Cover";
import { InfoCard } from "./info/InfoCard";

export const AgencyTemplate: FC = () => {
  return (
    <MainLayout>
      <Box mb="3">
        <Cover />
        <Box mt={["3", null, "-28"]} position="relative" px={[null, null, "8"]} zIndex="1">
          <PrimaryCard notBorderTop>
            <Box display="flex" flexDirection={["column", null, "row"]}>
              <InfoCard />
            </Box>
          </PrimaryCard>
        </Box>
      </Box>
    </MainLayout>
  );
};

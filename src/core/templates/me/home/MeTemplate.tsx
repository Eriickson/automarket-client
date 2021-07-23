import React, { FC } from "react";

// Packages
import { VStack } from "@chakra-ui/react";

// My Components
import { MainLayout } from "@/layouts";
import { EditProfile } from "./EditProfile";
import { CardPresentation } from "./CardPresentation";
import { ActionsBottom } from "./ActionsBottom";

export const MeTemplate: FC = () => {
  return (
    <MainLayout>
      <VStack align="stretch">
        <CardPresentation />
        <EditProfile />
        <ActionsBottom />
      </VStack>
    </MainLayout>
  );
};

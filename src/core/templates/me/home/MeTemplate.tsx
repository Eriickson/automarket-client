import React, { FC } from "react";

// Packages
import { VStack } from "@chakra-ui/react";

// My Components
import { MainLayout } from "@/layouts";
import { EditProfileForm } from "./EditProfileForm";
import { CardPresentation } from "./CardPresentation";
import { ActionsBottom } from "./ActionsBottom";

export const MeTemplate: FC = () => {
  return (
    <MainLayout>
      <VStack align="stretch">
        <CardPresentation />
        <EditProfileForm />
        <ActionsBottom />
      </VStack>
    </MainLayout>
  );
};

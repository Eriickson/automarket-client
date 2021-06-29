import React, { FC } from "react";

// Packages
import { VStack } from "@chakra-ui/react";

// My Components
import { MainLayout } from "@/layouts";
import { EditProfileForm } from "./EditProfileForm";
import { CardPresentation } from "./CardPresentation";
import { ActionsBottom } from "./ActionsBottom";
import { EditProfileFormOnSubmit } from "@/validations";

export const MeTemplate: FC = () => {
  async function onSubmit(values: EditProfileFormOnSubmit) {
    console.log(values);
  }

  return (
    <MainLayout>
      <VStack align="stretch">
        <CardPresentation />
        <EditProfileForm onSubmit={onSubmit} />
        <ActionsBottom />
      </VStack>
    </MainLayout>
  );
};

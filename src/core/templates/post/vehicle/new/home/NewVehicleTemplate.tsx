import { WizardProvider } from "@/components";
import { MainLayout } from "@/layouts";
import React, { FC } from "react";
import { NewVehicleWizard } from "./wizard/NewVehicleWizard";

export const NewVehicleTemplate: FC = () => {
  return (
    <MainLayout>
      <WizardProvider>
        <NewVehicleWizard />
      </WizardProvider>
    </MainLayout>
  );
};

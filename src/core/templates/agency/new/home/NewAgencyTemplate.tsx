import React, { FC } from "react";
import { MainLayout } from "@/layouts";
import { WizardProvider } from "@/components";
import { WizardNewAgency } from "./wizard/WizardNewAgency";

export const NewAgencyTemplate: FC = () => {
  return (
    <MainLayout>
      <WizardProvider>
        <WizardNewAgency />
      </WizardProvider>
    </MainLayout>
  );
};

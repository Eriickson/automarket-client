import React, { FC } from "react";
import { MainLayout } from "@/layouts";
import { Wizard, WizardProvider } from "@/components";
import { DataAgencyStep } from "./wizard/steps/agencyData/DataAgencyStep";
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

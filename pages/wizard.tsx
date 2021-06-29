import React from "react";

import { MainLayout } from "@/layouts";
import { Wizard, WizardProvider } from "@/components";

const WizardStep = () => {
  return (
    <MainLayout>
      <WizardProvider>
        <Wizard />
      </WizardProvider>
    </MainLayout>
  );
};

export default WizardStep;

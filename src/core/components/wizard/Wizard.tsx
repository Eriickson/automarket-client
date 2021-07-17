import React, { FC, useEffect } from "react";
import { Box } from "@chakra-ui/react";

import { StepIndicatorSm } from "./StepIndicatorSm";
import { StepIndicator } from "./StepIndicator";
import { WizardAction } from "./WizardAction";
import { useWizard } from "./WizardContext";
import { ContainerWizard } from "./ContainerWizard";
import { IWizardStep } from "./types";
import {} from "react";

interface WizardProps {
  stepList: IWizardStep[];
}

export const Wizard: FC<WizardProps> = ({ stepList }) => {
  const { addStepList } = useWizard();

  useEffect(() => {
    addStepList(stepList);
  }, []);

  return (
    <div>
      <Box mb="8">
        <Box display={["none", null, "block"]}>
          <StepIndicator />
        </Box>
        <Box display={[null, null, "none"]}>
          <StepIndicatorSm />
        </Box>
      </Box>
      <ContainerWizard />
      <WizardAction />
    </div>
  );
};

import React, { FC } from "react";
import { Box } from "@chakra-ui/react";
import { TemplateStepWizard } from "./TemplateStepWizard";
import { useWizard } from "./WizardContext";
import { Fade } from "@chakra-ui/react";

export const ContainerWizard: FC = () => {
  const { stepList, currentStep } = useWizard();

  return (
    <Box>
      {stepList.map(
        (step, i) =>
          currentStep === i && (
            <Fade in={true}>
              <TemplateStepWizard desc={step.desc} title={step.title}>
                {step.Component}
              </TemplateStepWizard>
            </Fade>
          ),
      )}
    </Box>
  );
};

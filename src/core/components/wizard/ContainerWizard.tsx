import React from "react";
import { Box } from "@chakra-ui/react";
import { TemplateStepWizard } from "./TemplateStepWizard";
import { useWizard } from "./WizardContext";
import { Fade } from "@chakra-ui/react";

export const ContainerWizard = () => {
  const { stepList, currentStep } = useWizard();

  return (
    <Box>
      {stepList.map(
        (step, i) =>
          currentStep === i && (
            <Fade in={true}>
              <TemplateStepWizard title={step.title} desc={step.desc}>
                {step.Component}
              </TemplateStepWizard>
            </Fade>
          ),
      )}
    </Box>
  );
};

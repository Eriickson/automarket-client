import React, { FC } from "react";
import { Box, Button } from "@chakra-ui/react";
import { useWizard } from "./WizardContext";

export const WizardAction: FC = () => {
  const { currentStep, stepList, stepListLenght, prevStep } = useWizard();
  return (
    <Box display="flex" justifyContent="flex-end" mt="3">
      <Button isDisabled={currentStep === 0} mr="3" onClick={prevStep}>
        Anterior
      </Button>
      <Button colorScheme="success" form={`form-${stepList[currentStep]?.nameForm}`} type="submit">
        {currentStep === stepListLenght - 1 ? "Completado" : "Siguiente"}
      </Button>
    </Box>
  );
};

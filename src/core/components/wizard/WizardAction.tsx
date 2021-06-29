import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { useWizard } from "./WizardContext";

export const WizardAction = () => {
  const { currentStep, stepListLenght, prevStep, nextStep } = useWizard();
  return (
    <Box justifyContent="flex-end" mt="3" display="flex">
      <Button isDisabled={currentStep === 0} mr="3" onClick={prevStep}>
        Anterior
      </Button>
      <Button colorScheme="success" onClick={nextStep}>
        {currentStep === stepListLenght - 1 ? "Completado" : "Siguiente"}
      </Button>
    </Box>
  );
};

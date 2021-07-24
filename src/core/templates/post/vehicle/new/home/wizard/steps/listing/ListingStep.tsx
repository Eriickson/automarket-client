import React, { FC } from "react";
import { ListingStepForm } from "./ListingStepForm";
import { useWizard } from "@/components";
import { Box } from "@chakra-ui/react";

export const ListingStep: FC = () => {
  const { nextStep } = useWizard();
  function onSubmit(values: Record<string, string[]>) {
    console.log(values);
    // nextStep();
  }

  return (
    <Box maxW="8xl" mx="auto">
      <ListingStepForm onSubmit={onSubmit} />
    </Box>
  );
};

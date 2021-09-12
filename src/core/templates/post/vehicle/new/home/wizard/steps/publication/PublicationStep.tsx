import React, { FC } from "react";

// Packages
import { Box } from "@chakra-ui/react";

// My Components
import { useWizard } from "@/components";
import { PostForm } from "./PostForm";

export const PublicationStep: FC = () => {
  const { nextStep } = useWizard();

  function onSubmit(values: any) {
    console.log(values);
    nextStep();
  }

  return (
    <Box maxW="xl" mx="auto">
      <PostForm onSubmit={onSubmit} />
    </Box>
  );
};

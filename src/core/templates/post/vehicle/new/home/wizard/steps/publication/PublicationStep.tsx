import { useWizard } from "@/components";
import { Box } from "@chakra-ui/react";
import React, { FC } from "react";
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

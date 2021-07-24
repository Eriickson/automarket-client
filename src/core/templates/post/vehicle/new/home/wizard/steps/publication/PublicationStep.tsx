import { Box } from "@chakra-ui/react";
import React, { FC } from "react";
import { PostForm } from "./PostForm";

export const PublicationStep: FC = () => {
  return (
    <Box maxW="xl" mx="auto">
      <PostForm />
    </Box>
  );
};

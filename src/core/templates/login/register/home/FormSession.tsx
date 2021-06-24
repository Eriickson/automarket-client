import React, { FC } from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

interface FormSessionProps {
  title: string;
  subtitle: string;
}

export const FormSession: FC<FormSessionProps> = ({ title, subtitle, children }) => {
  return (
    <Box>
      <Box mb="4">
        <Heading size="md">{title}</Heading>
        <Text color="gray.500" lineHeight="normal" size="md">
          {subtitle}
        </Text>
      </Box>
      <VStack align="inherit">{children}</VStack>
    </Box>
  );
};

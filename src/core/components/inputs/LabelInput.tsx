import React, { FC } from "react";
import { FormLabel, Text } from "@chakra-ui/react";

interface LabelInputProps {
  label: string;
  isRequired?: boolean;
}

export const LabelInput: FC<LabelInputProps> = ({ label, isRequired }) => {
  return (
    <FormLabel display="flex" fontSize="sm" ml="1" mb="0">
      {label}
      {isRequired && (
        <Text ml="0.5" fontWeight="medium" color="red.500" fontSize="lg" lineHeight="initial">
          *
        </Text>
      )}
    </FormLabel>
  );
};

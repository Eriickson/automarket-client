import React, { FC } from "react";
import { FormLabel, Text } from "@chakra-ui/react";

interface LabelInputProps {
  label: string;
  isRequired?: boolean;
}

export const LabelInput: FC<LabelInputProps> = ({ label, isRequired }) => {
  return (
    <FormLabel display="flex" fontSize="sm" mb="0" ml="1">
      {label}
      {isRequired && (
        <Text color="red.500" fontSize="lg" fontWeight="medium" lineHeight="initial" ml="0.5">
          *
        </Text>
      )}
    </FormLabel>
  );
};

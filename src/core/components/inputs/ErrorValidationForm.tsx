import React, { FC } from "react";

// Packages
import { FormHelperText, Collapse } from "@chakra-ui/react";
import { DeepMap, FieldError, FieldValues } from "react-hook-form";

interface ErrorValidationFormProps {
  name: string;
  errors: DeepMap<FieldValues, FieldError>;
}

export const ErrorValidationForm: FC<ErrorValidationFormProps> = ({ errors, name }) => {
  return (
    <Collapse animateOpacity in={Boolean(errors[name])}>
      <FormHelperText color="red.500" mt="0.5">
        {errors[name]?.message}
      </FormHelperText>
    </Collapse>
  );
};

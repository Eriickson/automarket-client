import React, { FC } from "react";

// Packages
import { FormControl, FormHelperText, Input, InputProps, Collapse } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

// My Components
import { LabelInput } from "..";

interface InputControlProps {
  name: string;
  label?: string;
  isRequired?: boolean;
  inputProps?: InputProps;
  defaultValue?: string | number;
  isDisabled?: boolean;
  noMarginBottom?: boolean;
}

export const InputControl: FC<InputControlProps> = ({ name, label, inputProps, isRequired, isDisabled, defaultValue }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const isError = errors[name];

  return (
    <FormControl id={name}>
      {label && <LabelInput isRequired={isRequired} label={label} />}
      <Input
        placeholder="Escribe algo..."
        {...inputProps}
        _disabled={{ bgColor: "gray.50", cursor: "not-allowed", _hover: { borderColor: "gray.200" } }}
        _focus={{
          borderColor: isError ? "red.500" : "pri.500",
          ring: "1px",
          ringColor: isError ? "red.500" : "pri.500",
        }}
        _hover={{ borderColor: isError && "red.400" }}
        _placeholder={{ color: isError && "red.200" }}
        bgColor={isError ? "red.50" : "white"}
        borderColor={isError ? "red.500" : "gray.300"}
        color={isError && "red.500"}
        colorScheme="red"
        isDisabled={isDisabled}
        px="3"
        rounded="sm"
        {...register(name)}
        defaultValue={defaultValue}
        shadow="sm"
      />
      <Collapse animateOpacity in={Boolean(errors[name])}>
        <FormHelperText color="red.500" mt="0.5">
          {errors[name]?.message}
        </FormHelperText>
      </Collapse>
    </FormControl>
  );
};

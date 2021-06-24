import React, { FC } from "react";

import { FormControl, FormHelperText, Input, InputProps, Collapse } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { LabelInput } from "..";

interface InputControlProps {
  name: string;
  label?: string;
  isRequired?: boolean;
  inputProps?: InputProps;
  defaultValue?: string | number;
}

export const InputControl: FC<InputControlProps> = ({ name, label, inputProps, isRequired, defaultValue }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const isError = errors[name];

  return (
    <FormControl id={name} mb="3">
      {label && <LabelInput isRequired={isRequired} label={label} />}
      <Input
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
        px="3"
        rounded="sm"
        shadow="sm"
        {...register(name)}
        defaultValue={defaultValue}
      />
      <Collapse animateOpacity in={Boolean(errors[name])}>
        <FormHelperText color="red.500" mt="0.5">
          {errors[name]?.message}
        </FormHelperText>
      </Collapse>
    </FormControl>
  );
};

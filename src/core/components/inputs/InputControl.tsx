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
    <FormControl id="email" mb="3">
      {label && <LabelInput label={label} isRequired={isRequired} />}
      <Input
        {...inputProps}
        colorScheme="red"
        // type="email"
        shadow="sm"
        rounded="sm"
        px="3"
        borderColor={isError ? "red.500" : "gray.300"}
        color={isError && "red.500"}
        bgColor={isError ? "red.50" : "white"}
        _hover={{ borderColor: isError && "red.400" }}
        _focus={{
          borderColor: isError ? "red.500" : "pri.500",
          ring: "1px",
          ringColor: isError ? "red.500" : "pri.500",
        }}
        _disabled={{ bgColor: "gray.50", cursor: "not-allowed", _hover: { borderColor: "gray.200" } }}
        _placeholder={{ color: isError && "red.200" }}
        {...register(name)}
        defaultValue={defaultValue}
      />
      <Collapse in={Boolean(errors[name])} animateOpacity>
        <FormHelperText color="red.500" mt="0.5">
          {errors[name]?.message}
        </FormHelperText>
      </Collapse>
    </FormControl>
  );
};

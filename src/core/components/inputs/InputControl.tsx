import React, { memo, FC, useEffect } from "react";

import { FormControl, FormLabel, FormHelperText, Input, InputProps, Text } from "@chakra-ui/react";
import { Control, FieldValues, useController } from "react-hook-form";

interface InputControlProps {
  name: string;
  label?: string;
  isRequired?: boolean;
  inputProps?: InputProps;
  control: Control<FieldValues>;
  defaultValue?: string | number;
}

export const InputControl: FC<InputControlProps> = memo(
  ({ name, label, inputProps, isRequired, control, defaultValue }) => {
    const { field } = useController({ name, control, defaultValue });

    useEffect(() => {
      console.log("Cambia aqui mismo");
    }, [field]);

    return (
      <FormControl id="email" mb="3">
        {label && (
          <FormLabel display="flex" fontSize="sm" ml="1" mb="0">
            {label}
            {isRequired && (
              <Text ml="0.5" fontWeight="medium" color="red.500" fontSize="lg" lineHeight="initial">
                *
              </Text>
            )}
          </FormLabel>
        )}
        <Input
          {...inputProps}
          colorScheme="red"
          type="email"
          shadow="sm"
          rounded="sm"
          px="3"
          borderColor="red.500"
          color="red.500"
          bgColor="red.50"
          _hover={{ borderColor: "red.400" }}
          _focus={{ borderColor: "red.500", ring: "1px", ringColor: "red.500" }}
          _disabled={{ bgColor: "gray.50", cursor: "not-allowed", _hover: { borderColor: "gray.200" } }}
          _placeholder={{ color: "red.200" }}
          {...field}
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
    );
  },
);

/* <Input
        {...inputProps}
        colorScheme="red"
        type="email"
        shadow="sm"
        rounded="sm"
        px="3"
        _focus={{ borderColor: "pri.500", ring: "1px", ringColor: "pri.500" }}
        _disabled={{ bgColor: "gray.50", cursor: "not-allowed", _hover: { borderColor: "gray.200" } }}
      /> */

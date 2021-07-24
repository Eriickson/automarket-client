import React, { FC, ReactElement } from "react";
import { Radio, Stack, Text, RadioGroup as RadioGroupChakra, FormControl } from "@chakra-ui/react";
import { IOption } from "@/shared";
import { LabelInput } from "@/components";
import { useFormContext, Controller } from "react-hook-form";
import { useEffect } from "react";

interface IRadioItem {
  isDisable?: boolean;
  label: string | ReactElement;
  value: string | number | boolean;
}

interface RadioGroupProps {
  name: string;
  label?: string;
  isRequired?: boolean;
  radioItems: IRadioItem[];
  size?: "sm" | "md" | "lg";
  direction?: "row" | "column";
  defaultValue?: string | number | boolean;
}

export const RadioGroup: FC<RadioGroupProps> = ({
  label,
  isRequired,
  name,
  size,
  direction = "row",
  defaultValue,
  radioItems,
}) => {
  const { control, setValue } = useFormContext();

  useEffect(() => {
    setValue(name, String(defaultValue));
  }, [defaultValue]);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormControl w="max-content">
          {label && <LabelInput isRequired={isRequired} label={label} />}
          <RadioGroupChakra defaultValue={String(defaultValue)} size={size} {...field}>
            <Stack direction={direction}>
              {radioItems.map((radioItem, i) => (
                <Radio isDisabled={radioItem.isDisable} key={i} size={size} value={String(radioItem.value)}>
                  <Text cursor="pointer" fontWeight="medium">
                    {radioItem.label}
                  </Text>
                </Radio>
              ))}
            </Stack>
          </RadioGroupChakra>
        </FormControl>
      )}
    />
  );
};

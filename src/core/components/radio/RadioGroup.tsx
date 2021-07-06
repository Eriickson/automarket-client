import React, { FC } from "react";
import { Radio, Stack, RadioGroup as RadioGroupChakra, FormControl } from "@chakra-ui/react";
import { IOption } from "@/shared";
import { LabelInput } from "@/components";
import { useFormContext, Controller } from "react-hook-form";

interface IRadioItem extends IOption {
  isDisable?: boolean;
}

interface RadioGroupProps {
  name: string;
  label?: string;
  isRequired?: boolean;
  radioItems: IRadioItem[];
  size?: "sm" | "md" | "lg";
  direction?: "row" | "column";
  defaultValue?: string | number;
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
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormControl mb="3">
          {label && <LabelInput isRequired={isRequired} label={label} />}
          <RadioGroupChakra defaultValue={defaultValue} size={size} {...field}>
            <Stack direction={direction}>
              {radioItems.map((radioItem, i) => (
                <Radio size="lg" isDisabled={radioItem.isDisable} key={i} value={radioItem.value}>
                  {radioItem.label}
                </Radio>
              ))}
            </Stack>
          </RadioGroupChakra>
        </FormControl>
      )}
    />
  );
};

import React, { FC } from "react";
import { Radio, Stack, RadioGroup as RadioGroupChakra } from "@chakra-ui/react";
import { IOption } from "@/shared";
import { useFormContext, Controller } from "react-hook-form";

interface IRadioItem extends IOption {
  isDisable?: boolean;
}

interface RadioGroupProps {
  name: string;
  radioItems: IRadioItem[];
  size?: "sm" | "md" | "lg";
  direction?: "row" | "column";
  defaultValue?: string | number;
}

export const RadioGroup: FC<RadioGroupProps> = ({ name, size, direction = "row", defaultValue, radioItems }) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <RadioGroupChakra size={size} {...field} >
          <Stack direction={direction}>
            {radioItems.map((radioItem, i) => (
              <Radio size="lg" isDisabled={radioItem.isDisable} key={i} value={radioItem.value}>
                {radioItem.label}
              </Radio>
            ))}
          </Stack>
        </RadioGroupChakra>
      )}
    />
  );
};

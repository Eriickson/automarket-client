import React, { FC } from "react";
import { Radio, Stack, RadioGroup as RadioGroupChakra } from "@chakra-ui/react";
import { IOption } from "@/shared";
import { useFormContext, Controller } from "react-hook-form";

interface RadioGroupProps {
  name: string;
  radioItems: IOption[];
  size?: "sm" | "md" | "lg";
  direction?: "row" | "column";
  defaultChecked?: string | number | boolean;
}

export const RadioGroup: FC<RadioGroupProps> = ({ name, size, direction = "row", defaultChecked, radioItems }) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <RadioGroupChakra size={size} {...field}>
          <Stack direction={direction}>
            {radioItems.map((radioItem, i) => (
              <Radio key={i} value={radioItem.value}>
                {radioItem.label}
              </Radio>
            ))}
          </Stack>
        </RadioGroupChakra>
      )}
    />
  );
};

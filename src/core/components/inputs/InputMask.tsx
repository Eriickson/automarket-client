import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@chakra-ui/react";
import ReactInputMask from "react-input-mask";

interface InputMaskProps {
  name: string;
  mask?: string;
}

export const InputMask: FC<InputMaskProps> = ({ name, mask }) => {
  const { control } = useFormContext();

  return (
    <div>
      <Controller
        control={control}
        name={name}
        rules={{ maxLength: 17 }}
        render={({ field }) => (
          /*  */
          <ReactInputMask {...field} mask={String(mask)} maskChar="">
            {(props: any) => <Input {...props} />}
          </ReactInputMask>
        )}
      />
    </div>
  );
};

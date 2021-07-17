import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@chakra-ui/react";
import ReactInputMask from "react-input-mask";

export const InputMask = () => {
  const {
    register,
    formState: { errors },
    getValues,
    control,
  } = useFormContext();
  return (
    <div>
      <Controller
        name="edad"
        control={control}
        render={({ field }) => (
          <ReactInputMask mask="99/99/9999" {...field}>
            {(props: any) => <Input {...props} />}
          </ReactInputMask>
        )}
      />
    </div>
  );
};

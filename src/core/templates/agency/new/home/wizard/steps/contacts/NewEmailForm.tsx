import { InputControl } from "@/components";
import React, { FC } from "react";

import { useForm, FormProvider, useFieldArray, FieldValues, Control } from "react-hook-form";
import { Box } from "@chakra-ui/react";

interface NewEmailFormProps {
  onSubmit(value: any): void;
  control: Control<FieldValues>;
}

export const NewEmailForm: FC<NewEmailFormProps> = ({ control, onSubmit }) => {
  const methods = useForm({ mode: "onBlur" });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control,
    name: "contacts.emails",
  });

  function handlerSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();
    const title: string = methods.getValues("title");
    const value: string = methods.getValues("value");

    if (!Boolean(value)) methods.setError("value", { message: "Este campo es requerido" });

    if (!Boolean(title)) methods.setError("title", { message: "Este campo es requerido" });

    if (!Boolean(title)) {
      methods.setFocus("title");
      return;
    } else if (!Boolean(value)) {
      methods.setFocus("value");
      return;
    }

    append({ typeContact: "email", title, value });

    // onSubmit({ typeContact: "email", title, value });
  }

  return (
    <FormProvider {...methods}>
      <form id="form-new-contact-modal" onSubmit={handlerSubmit}>
        <InputControl isRequired label="Título" name="title" />
        <InputControl isRequired label="Valor" name="value" />
        <Box visibility="hidden">x</Box>
      </form>
    </FormProvider>
  );
};

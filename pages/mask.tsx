import { InputMask } from "@/components";
import { MainLayout } from "@/layouts";
import { Button } from "@chakra-ui/react";
import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";

const Mask: FC = () => {
  const methods = useForm();

  function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <MainLayout>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <InputMask mask="+1 (999) 999-9999" name="numberPhone" />
          <Button type="submit">Enviar</Button>
        </form>
      </FormProvider>
    </MainLayout>
  );
};

export default Mask;

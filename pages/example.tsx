import React from "react";
import { InputControl, Range } from "@/components";
import { FormProvider, useForm } from "react-hook-form";
import { MainLayout } from "@/layouts";
import { Button } from "@chakra-ui/react";

const RangePage = () => {
  const methods = useForm();

  function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <MainLayout>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Range multiple name="range" min={0} max={1000} step={1} defaultValue={[15, 300]} />
          <Range multiple name="range" min={0} max={1000} step={1} defaultValue={[15, 300]} isDisabled />
          <InputControl name="example" />
          <Button type="submit">Enviar</Button>
        </form>
      </FormProvider>
    </MainLayout>
  );
};

export default RangePage;

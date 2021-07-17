import { InputControl, InputMask } from "@/components";
import { MainLayout } from "@/layouts";
import React, { FC, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";

const Mask: FC = () => {
  const methods = useForm();
  return (
    <MainLayout>
      <FormProvider {...methods}>
        <InputMask />
      </FormProvider>
    </MainLayout>
  );
};

export default Mask;

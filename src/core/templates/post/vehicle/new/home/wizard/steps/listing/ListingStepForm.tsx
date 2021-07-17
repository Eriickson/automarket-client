import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";

interface ListingStepFormProps {
  onSubmit(values: any): void;
}

export const ListingStepForm: FC<ListingStepFormProps> = ({ onSubmit }) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form id="form-listing-step" onSubmit={methods.handleSubmit(onSubmit)}></form>
    </FormProvider>
  );
};

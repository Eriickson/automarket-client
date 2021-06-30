import React from "react";
import { Box } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { useWizard } from "@/components";

export const DataAgencyStep = () => {
  const methods = useForm();
  const { nextStep } = useWizard();

  return (
    <FormProvider {...methods}>
      <form
        id="form-agency-data"
        onSubmit={methods.handleSubmit(values => {
          nextStep();
        })}
      ></form>
    </FormProvider>
  );
};

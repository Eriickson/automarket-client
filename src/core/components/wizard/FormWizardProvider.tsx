import React, { FC } from "react";

import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";

import { useWizard } from "./WizardContext";

interface FormWizardProviderProps {
  methods: UseFormReturn<FieldValues>;
  onSubmit(values: any): void;
}

export const FormWizardProvider: FC<FormWizardProviderProps> = ({ methods, children, onSubmit }) => {
  const { stepList, currentStep } = useWizard();
  return (
    <FormProvider {...methods}>
      <form id={`form-${stepList[currentStep]?.nameForm}`} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

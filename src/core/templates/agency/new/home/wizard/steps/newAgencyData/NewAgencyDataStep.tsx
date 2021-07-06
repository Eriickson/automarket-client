import React from "react";
import { useWizard } from "@/components";
import { NewAgencyDataForm } from "./NewAgencyDataForm";

export const NewAgencyDataStep = () => {
  const { nextStep } = useWizard();

  async function onSubmit(values: any) {
    console.log({ values });
    nextStep();
  }

  return <NewAgencyDataForm onSubmit={onSubmit} />;
};

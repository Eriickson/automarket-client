import React from "react";
import { useWizard } from "@/components";
import { NewAgencyDataForm } from "./NewAgencyDataForm";
import { INewAgencyDataFormOnSubmit } from "@/validations";
import { useAction } from "@/store";

export const NewAgencyDataStep = () => {
  const { setNewAgencyInfo } = useAction();
  const { nextStep } = useWizard();

  async function onSubmit(values: INewAgencyDataFormOnSubmit) {
    // setNewAgencyInfo({ agencyData: values });
    nextStep();
  }

  return <NewAgencyDataForm onSubmit={onSubmit} />;
};

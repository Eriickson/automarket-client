import React, { FC } from "react";

// My Elements
import { INewAgencyDataFormOnSubmit } from "@/validations";
import { useAction } from "@/store";

// My Components
import { useWizard } from "@/components";
import { NewAgencyDataForm } from "./NewAgencyDataForm";

export const NewAgencyDataStep: FC = () => {
  const { setNewAgencyInfo } = useAction();
  const { nextStep } = useWizard();

  async function onSubmit(values: INewAgencyDataFormOnSubmit) {
    console.log(values);
    // setNewAgencyInfo({ agencyData: values });
    // nextStep();
  }

  return <NewAgencyDataForm onSubmit={onSubmit} />;
};

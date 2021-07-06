import React from "react";

import { useWizard } from "@/components";
import { UbicationForm } from "./UbicationForm";

export const UbicationStep = () => {
  const { nextStep } = useWizard();
  async function onSubmit(values: any) {
    console.log({ values });
    nextStep();
  }

  return <UbicationForm onSubmit={onSubmit} />;
};

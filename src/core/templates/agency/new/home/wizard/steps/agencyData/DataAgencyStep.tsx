import React from "react";
import { useWizard } from "@/components";
import { DataAgencyForm } from "./DataAgencyForm";

export const DataAgencyStep = () => {
  const { nextStep } = useWizard();

  async function onSubmit(values: any) {
    console.log({ values });
    nextStep();
  }

  return <DataAgencyForm onSubmit={onSubmit} />;
};

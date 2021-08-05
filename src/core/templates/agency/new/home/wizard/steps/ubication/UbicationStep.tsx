import React, { FC } from "react";

import { useWizard } from "@/components";
import { UbicationForm } from "./UbicationForm";
import { IUbicationNewAgencyOnSubmit } from "@/validations";
import { useAction } from "@/store";

export const UbicationStep: FC = () => {
  const { nextStep } = useWizard();
  const { setNewAgencyInfo } = useAction();
  async function onSubmit(values: IUbicationNewAgencyOnSubmit) {
    setNewAgencyInfo({
      ubication: {
        province: values.province,
        municipality: values.municipality,
        sector: values.sector,
        reference: values.reference,
      },
    });
    nextStep();
  }

  return <UbicationForm onSubmit={onSubmit} />;
};

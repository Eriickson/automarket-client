import React, { FC, useEffect } from "react";

// My Elements
import { INewAgencyDataFormOnSubmit } from "@/validations";
import { useAction } from "@/store";
import { useVerifyAgencyName } from "@/graphql";

// My Components
import { useWizard } from "@/components";
import { NewAgencyDataForm } from "./NewAgencyDataForm";

export const NewAgencyDataStep: FC = () => {
  const { verifyAgencyNameFetch, data } = useVerifyAgencyName();
  const { setNewAgencyInfo } = useAction();
  const { nextStep } = useWizard();

  async function onSubmit(values: INewAgencyDataFormOnSubmit) {
    setNewAgencyInfo({
      agencyData: {
        isProfessional: values.isProfessional,
        name: values.name,
        slogan: values.slogan,
        logo: values.logo,
      },
    });
    verifyAgencyNameFetch({ input: { name: values.name } });
  }

  useEffect(() => {
    if (!data) return;
    if (!data.verifyAgencyName.registeredName) nextStep();
    else console.log("Este nombre de agencia ya existe");
  }, [data]);

  return <NewAgencyDataForm onSubmit={onSubmit} />;
};

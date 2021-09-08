import React, { FC, useEffect } from "react";

// My Elements
import { INewAgencyDataFormOnSubmit } from "@/validations";
import { useAction } from "@/store";
import { useVerifyAgencyName } from "@/graphql";

// My Components
import { useWizard } from "@/components";
import { NewAgencyDataForm } from "./NewAgencyDataForm";
import { useUIContext } from "@/context";

export const NewAgencyDataStep: FC = () => {
  const { verifyAgencyNameFetch, data } = useVerifyAgencyName();
  const { setNewAgencyInfo } = useAction();
  const { nextStep } = useWizard();
  const { toast } = useUIContext();

  async function onSubmit(values: INewAgencyDataFormOnSubmit) {
    if (!values.logo) {
      toast.showToast({
        title: "Logo no seleccionado",
        desc: "Seleccionar un logo para pasar al siguiente paso",
        status: "warning",
      });
      return;
    }
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

import React, { FC, useEffect } from "react";

// My Elements
import { INewAgencyDataFormOnSubmit } from "@/validations";
import { useAction } from "@/store";
import { useVerifyAgencyName } from "@/graphql";

// My Components
import { ApolloErrorComponent, useWizard } from "@/components";
import { NewAgencyDataForm } from "./NewAgencyDataForm";
import { useUIContext } from "@/context";

export const NewAgencyDataStep: FC = () => {
  const { verifyAgencyNameFetch, data, error } = useVerifyAgencyName();
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
    else
      toast.showToast({
        title: "Valor en uso",
        desc: "Este nombre de la agencia ya está siendo utilizado por alguien más.",
        status: "warning",
      });
  }, [data]);

  return (
    <>
      <NewAgencyDataForm onSubmit={onSubmit} />
      <ApolloErrorComponent error={error} />
    </>
  );
};

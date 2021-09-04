import React, { FC } from "react";
import { useWizard } from "@/components";
import { ContactForm } from "./ContactForm";
import { useAction } from "@/store";

export const ContactsStep: FC = () => {
  const { nextStep } = useWizard();
  const { setNewAgencyInfo } = useAction();
  async function onSubmit(values: any) {
    setNewAgencyInfo({ contacts: { numbersPhone: values.numberPhone } });
    nextStep();
  }

  return (
    <>
      <ContactForm onSubmit={onSubmit} />
    </>
  );
};

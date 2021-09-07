import React, { FC } from "react";
import { useWizard } from "@/components";
import { ContactForm } from "./ContactForm";
import { useAction } from "@/store";

export const ContactsStep: FC = () => {
  const { nextStep } = useWizard();
  const { setNewAgencyInfo } = useAction();
  async function onSubmit(values: any) {
    console.log(values);

    setNewAgencyInfo({ contacts: values });
    nextStep();
  }

  return (
    <>
      <ContactForm onSubmit={onSubmit} />
    </>
  );
};

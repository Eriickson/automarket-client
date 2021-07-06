import React from "react";
import { useWizard } from "@/components";
import { ContactForm } from "./ContactForm";

export const ContactsStep = () => {
  const { nextStep } = useWizard();
  async function onSubmit(values: any) {
    console.log({ values });
    nextStep();
  }

  return <ContactForm onSubmit={onSubmit} />;
};

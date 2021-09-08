import React, { FC } from "react";

// My Elements
import { useUIContext } from "@/context";
import { useAction } from "@/store";

// My Components
import { useWizard } from "@/components";
import { ContactForm, Contacts } from "./ContactForm";

export const ContactsStep: FC = () => {
  const { nextStep } = useWizard();
  const { setNewAgencyInfo } = useAction();
  const { toast } = useUIContext();
  async function onSubmit(values: Contacts) {
    if (values.contacts.phoneNumbers.length + values.contacts.emails.length < 3) {
      toast.showToast({ title: "Advertencia", desc: "Debe de agregar almenos 3 contactos", status: "warning" });
      return;
    }

    setNewAgencyInfo({
      contacts: {
        emails: values.contacts.emails,
        phoneNumbers: values.contacts.phoneNumbers,
      },
    });

    nextStep();
  }

  return (
    <>
      <ContactForm onSubmit={onSubmit} />
    </>
  );
};

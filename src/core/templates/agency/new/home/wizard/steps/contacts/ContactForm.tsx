import React, { FC } from "react";

// Packages
import { useForm } from "react-hook-form";
import { Box } from "@chakra-ui/react";

// My Elements
import { Contact } from "@/shared";

// My Components
import { FormWizardProvider } from "@/components";
import { NewContactPopover } from "./NewContactPopover/NewContactPopover";
export interface Contacts {
  contacts: { phoneNumbers: Contact[]; emails: Contact[] };
}
interface ContactFormProps {
  onSubmit(values: Contacts): void;
}

export const ContactForm: FC<ContactFormProps> = ({ onSubmit }) => {
  const methods = useForm();

  return (
    <FormWizardProvider methods={methods} onSubmit={onSubmit}>
      <Box maxW="sm" mx="auto">
        <NewContactPopover />
      </Box>
    </FormWizardProvider>
  );
};

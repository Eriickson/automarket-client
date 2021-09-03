import React, { FC } from "react";

// Packages
import { useForm } from "react-hook-form";
import { Box, Stack, StackDivider } from "@chakra-ui/react";

// My Components
import { FormWizardProvider } from "@/components";
import { NewContactPopover } from "./NewContactPopover/NewContactPopover";
import { ContactList } from "./ContactList";

interface ContactFormProps {
  onSubmit(values: any): void;
}

export const ContactForm: FC<ContactFormProps> = ({ onSubmit }) => {
  const methods = useForm();

  return (
    <FormWizardProvider methods={methods} onSubmit={onSubmit}>
      <Box maxW="sm" mx="auto">
        <ContactList />
        <NewContactPopover />
      </Box>
    </FormWizardProvider>
  );
};

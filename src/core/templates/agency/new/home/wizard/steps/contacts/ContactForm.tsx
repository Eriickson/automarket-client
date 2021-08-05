import React, { FC } from "react";

// Packages
import { useForm } from "react-hook-form";
import { Box } from "@chakra-ui/react";

// My Components
import { FormWizardProvider } from "@/components";
import { AgencyNewContact } from "src/core/components/agency/ContactModal";

interface ContactFormProps {
  onSubmit(values: any): void;
}

export const ContactForm: FC<ContactFormProps> = ({ onSubmit }) => {
  const methods = useForm();

  return (
    <FormWizardProvider methods={methods} onSubmit={onSubmit}>
      <Box maxW="sm" mx="auto">
        <AgencyNewContact />
      </Box>
    </FormWizardProvider>
  );
};

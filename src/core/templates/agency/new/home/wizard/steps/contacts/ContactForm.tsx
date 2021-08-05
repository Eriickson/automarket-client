import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { Box, Stat, StatLabel, StatNumber, Tag, Divider, SimpleGrid, GridItem } from "@chakra-ui/react";

import { FormWizardProvider } from "@/components";
import { ModalNewContact } from "./ModalNewContact";
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

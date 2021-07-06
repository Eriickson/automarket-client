import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { Box, Stat, StatLabel, StatNumber, Tag, Divider, SimpleGrid, GridItem } from "@chakra-ui/react";

import { FormWizardProvider } from "@/components";
import { ModalNewContact } from "./ModalNewContact";

interface ContactFormProps {
  onSubmit(values: any): void;
}

export const ContactForm: FC<ContactFormProps> = ({ onSubmit }) => {
  const methods = useForm();

  return (
    <FormWizardProvider methods={methods} onSubmit={onSubmit}>
      <Box maxW="sm" mx="auto">
        <SimpleGrid>
          <GridItem>
            <Stat mb="3">
              <StatLabel>Teléfono principal</StatLabel>
              <StatNumber>+1 (829) 816-0959</StatNumber>
              <Tag colorScheme="whatsapp">Whatsapp</Tag>
              {/* <StatHelpText>Correo electrónico</StatHelpText> */}
            </Stat>
            <Divider my="1" orientation="horizontal" />
            <Stat mb="3">
              <StatLabel>Teléfono principal</StatLabel>
              <StatNumber>+1 (829) 816-0959</StatNumber>
              <Tag colorScheme="whatsapp">Whatsapp</Tag>
              {/* <StatHelpText>Correo electrónico</StatHelpText> */}
            </Stat>
            <Divider my="1" orientation="horizontal" />
            <Stat mb="3">
              <StatLabel>Teléfono principal</StatLabel>
              <StatNumber>+1 (829) 816-0959</StatNumber>
              <Tag colorScheme="whatsapp">Whatsapp</Tag>
              {/* <StatHelpText>Correo electrónico</StatHelpText> */}
            </Stat>
            <ModalNewContact />
            {/* <Button>Correo electrónico</Button> */}
          </GridItem>
        </SimpleGrid>
      </Box>
    </FormWizardProvider>
  );
};

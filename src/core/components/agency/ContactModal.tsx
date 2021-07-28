import { Box } from "@chakra-ui/react";
import React, { FC } from "react";
import { ContactList } from "./ContactList";
import { ModalNewContact } from "./ModalNewContact";

export const AgencyNewContact: FC = () => {
  return (
    <Box w="full">
      <ContactList />
      <ModalNewContact />
    </Box>
  );
};

import { PrimaryCard } from "@/components";
import { Heading } from "@chakra-ui/layout";
import React from "react";
import { List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { useSelector } from "@/store";

export const ContactsList = () => {
  const { selectedBranch } = useSelector(({ agency }) => agency.myAgency);
  console.log(selectedBranch);

  return (
    <PrimaryCard notBorderTop>
      <Heading fontSize={["md", null, "lg"]} mb="3">
        Contactos
      </Heading>
      <List spacing={2}>
        {selectedBranch.contacts.phoneNumbers.map(phoneNumber => (
          <ListItem fontWeight="medium" key={phoneNumber.value}>
            <ListIcon as={PhoneIcon} color="green.500" />
            {phoneNumber.label}: {phoneNumber.value}
          </ListItem>
        ))}
        {selectedBranch.contacts.emails.map(email => (
          <ListItem fontWeight="medium" key={email.value}>
            <ListIcon as={EmailIcon} color="green.500" />
            {email.label}: {email.value}
          </ListItem>
        ))}
      </List>
    </PrimaryCard>
  );
};

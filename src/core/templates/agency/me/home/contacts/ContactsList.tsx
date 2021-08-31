import { PrimaryCard } from "@/components";
import { Heading } from "@chakra-ui/layout";
import React from "react";
import { List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";

export const ContactsList = () => {
  return (
    <PrimaryCard notBorderTop>
      <Heading fontSize={["md", null, "lg"]} mb="3">
        Contactos
      </Heading>
      <List spacing={2}>
        <ListItem fontWeight="medium">
          <ListIcon as={PhoneIcon} color="green.500" />
          Oficina: +1 (829) 816-0959
        </ListItem>
        <ListItem fontWeight="medium">
          <ListIcon as={PhoneIcon} color="green.500" />
          Omar Antonis: +1 (829) 816-0959
        </ListItem>
        {/* You can also use custom icons from react-icons */}
        <ListItem fontWeight="medium">
          <ListIcon as={EmailIcon} color="green.500" />
          Oficina: erickson01d@gmail.com
        </ListItem>
      </List>
    </PrimaryCard>
  );
};

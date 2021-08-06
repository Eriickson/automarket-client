import { InputControl, InputMask, LabelInput } from "@/components";
import { ContactType } from "@/shared";
import { PhoneIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  Box,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Text,
} from "@chakra-ui/react";
import { IconPhone } from "@tabler/icons";
import React, { FC } from "react";
import { useFormContext } from "react-hook-form";

export const PhoneNumbers: FC = () => {
  const { getValues } = useFormContext();
  function onSaveContact(typeContact: ContactType) {
    if (typeContact === "PHONE_NUMBER") {
      const { phoneNumberLabel, phoneNumberValue } = getValues();
      if (!phoneNumberLabel || !phoneNumberValue) {
        console.log("Debes completar todos los campos");

        return;
      }
      console.log(phoneNumberLabel, phoneNumberValue);
      return;
    }
  }

  return (
    <div>
      <Accordion>
        <AccordionItem>
          <h2>
            <AccordionButton p="0">
              <Button w="full">Números telefónicos</Button>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <List mb={3} spacing={3}>
              <ListItem alignItems="center" display="flex">
                <ListIcon as={PhoneIcon} color="green.500" />
                <Text display="flex">
                  Oficina Principal:
                  <Text fontWeight="semibold" ml="0.5">
                    +1 (829) 816-0959
                  </Text>
                </Text>
              </ListItem>
            </List>
            <Box>
              <InputControl isRequired label="Título" name="phoneNumberLabel" />
              <Box my="2">
                <LabelInput isRequired label="Teléfono" />
                <InputMask mask="+1 (999) 999-9999" name="phoneNumberValue" />
              </Box>
              <Button colorScheme="pri" w="full" onClick={() => onSaveContact("PHONE_NUMBER")}>
                Agregar
              </Button>
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton p="0">
              <Button w="full">Correos electrónicos</Button>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

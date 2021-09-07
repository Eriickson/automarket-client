import React, { FC } from "react";

// Packages
import { Button, HStack, Stack, StackDivider, Flex, Box, Text, IconButton, Divider, Badge } from "@chakra-ui/react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { IconMail, IconPhone, IconTrash } from "@tabler/icons";

// My Components
import { AddContacts } from "@/components";

export type Contact = {
  label: string;
  value: string;
  payload: Record<string, string | string[]>;
};

export const NewContactPopover: FC = () => {
  const { control } = useFormContext();
  const {
    fields: fieldsEmail,
    append: appendEmail,
    remove: removeEmail,
  } = useFieldArray({ control, name: "contacts.emails" });
  const {
    fields: fieldsPhoneNumber,
    append: appendPhoneNumber,
    remove: removePhoneNumber,
  } = useFieldArray({
    control,
    name: "contacts.phoneNumber",
  });
  function getNewEmail(newEmail: Contact) {
    appendEmail(newEmail);
  }
  function getNewPhoneNumber(newPhoneNumber: Contact) {
    appendPhoneNumber(newPhoneNumber);
  }

  return (
    <>
      <Stack divider={<StackDivider />}>
        {fieldsPhoneNumber.map((email, i) => (
          <Flex alignItems="center" justifyContent="space-between" key={email.id}>
            <Flex>
              <Flex
                alignItems="center"
                bg="pri.50"
                border="2px solid"
                color="pri.400"
                h="10"
                justifyContent="center"
                mr="3"
                rounded="sm"
                w="10"
              >
                <IconPhone />
              </Flex>
              <Box>
                <Text fontSize="lg" fontWeight="medium" letterSpacing="-0.5px" lineHeight="none">
                  {Object.values(email)[2]}
                </Text>
                <Text color="gray.600" fontSize="sm">
                  {Object.values(email)[1]}
                </Text>
                <HStack>
                  {JSON.stringify(Object.values(email)[3], null, 4)}
                  <Badge colorScheme="whatsapp" size="sm">
                    Whatsapp
                  </Badge>
                  <Badge colorScheme="telegram" size="sm">
                    Telegram
                  </Badge>
                </HStack>
              </Box>
            </Flex>
            <IconButton
              _focus={{ shadow: "none" }}
              aria-label="Eliminar contacto"
              colorScheme="danger"
              icon={<IconTrash size="1.25rem" />}
              size="sm"
              variant="ghost"
              onClick={() => removePhoneNumber(i)}
            />
          </Flex>
        ))}
      </Stack>
      {fieldsEmail.length && fieldsPhoneNumber.length ? <Divider my="2" /> : null}
      <Stack divider={<StackDivider />}>
        {fieldsEmail.map((email, i) => (
          <Flex alignItems="center" justifyContent="space-between" key={email.id}>
            <Flex>
              <Flex
                alignItems="center"
                bg="pri.50"
                border="2px solid"
                color="pri.400"
                h="10"
                justifyContent="center"
                mr="3"
                rounded="sm"
                w="10"
              >
                <IconMail />
              </Flex>
              <Box>
                <Text fontSize="lg" fontWeight="medium" letterSpacing="-0.5px" lineHeight="none">
                  {Object.values(email)[2]}
                </Text>
                <Text color="gray.600" fontSize="sm">
                  {Object.values(email)[1]}
                </Text>
              </Box>
            </Flex>
            <IconButton
              _focus={{ shadow: "none" }}
              aria-label="Eliminar contacto"
              colorScheme="danger"
              icon={<IconTrash size="1.25rem" />}
              size="sm"
              variant="ghost"
              onClick={() => removeEmail(i)}
            />
          </Flex>
        ))}
      </Stack>
      <AddContacts getNewEmail={getNewEmail} getNewPhoneNumber={getNewPhoneNumber}>
        <Button mt="3" w="full">
          Nuevo Contacto
        </Button>
      </AddContacts>
    </>
  );
};

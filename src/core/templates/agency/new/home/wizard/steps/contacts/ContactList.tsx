import React, { FC } from "react";

// Packages
import { Box, Flex, Text, IconButton, Stack, StackDivider } from "@chakra-ui/react";
import { IconMail, IconPhone, IconTrash } from "@tabler/icons";
import { useFieldArray, useFormContext } from "react-hook-form";

// My Components

export const ContactList: FC = () => {
  const { control } = useFormContext();
  const { fields, remove } = useFieldArray({ name: "emails", control });

  return (
    <Stack divider={<StackDivider />}>
      {fields.map((email, i) => (
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
              {i % 2 === 0 ? <IconPhone /> : <IconMail />}
            </Flex>
            <Box>
              <Text fontSize="lg" fontWeight="medium" letterSpacing="-0.5px" lineHeight="none">
                {Object.values(email)[1]}
              </Text>
              <Text color="gray.600" fontSize="sm">
                Oficina Principal
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
            onClick={() => remove(i)}
          />
        </Flex>
      ))}
    </Stack>
  );
};

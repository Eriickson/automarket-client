import React, { FC } from "react";
import {
  Box,
  Stat,
  StatLabel,
  StatNumber,
  Tag,
  VStack,
  StackDivider,
  Button,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { CloseIcon } from "@chakra-ui/icons";

type FormType = {
  numberPhone: any[];
};

export const ContactList: FC = () => {
  const { watch } = useFormContext<FormType>();
  const { remove } = useFieldArray({ name: "numberPhone" });

  return (
    <Box mb="3">
      <VStack alignItems="stretch" divider={<StackDivider />} flex="1" mb="5" mr="5">
        {watch("numberPhone")?.map((numberPhone, i) => (
          <Flex key={i}>
            <Stat>
              <StatLabel>{numberPhone.title}</StatLabel>
              <StatNumber fontSize="md">{numberPhone.value}</StatNumber>
              {numberPhone.hasWhatsapp && <Tag colorScheme="whatsapp">Whatsapp</Tag>}
            </Stat>
            <IconButton
              variant="ghost"
              size="sm"
              colorScheme="danger"
              aria-label="Eliminar contact"
              icon={<CloseIcon />}
              onClick={() => remove(i)}
            >
              Remover
            </IconButton>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

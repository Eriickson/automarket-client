import { RadioGroup } from "@/components";
import { Box, Button, StackDivider, Text, VStack } from "@chakra-ui/react";
import React from "react";

export const AccordionItemOrderForm = () => {
  return (
    <VStack alignItems="stretch" divider={<StackDivider />}>
      <Box>
        <Text>Fecha de publicación</Text>
        <RadioGroup
          name="date"
          radioItems={[
            { label: "Ascendente", value: 1 },
            { label: "Descendente", value: 2 },
          ]}
        />
      </Box>
      <Box>
        <Text>Precio</Text>
        <RadioGroup
          name="date"
          radioItems={[
            { label: "Ascendente", value: 1 },
            { label: "Descendente", value: 2 },
          ]}
        />
      </Box>
      <Box>
        <Text>Año</Text>
        <RadioGroup
          name="date"
          radioItems={[
            { label: "Ascendente", value: 1 },
            { label: "Descendente", value: 2 },
          ]}
        />
      </Box>
    </VStack>
  );
};

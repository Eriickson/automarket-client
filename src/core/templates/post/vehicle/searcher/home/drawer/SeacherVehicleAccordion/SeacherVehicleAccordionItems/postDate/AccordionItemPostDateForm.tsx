import { RadioGroup } from "@/components";
import { Box } from "@chakra-ui/react";
import React from "react";

export const AccordionItemPostDateForm = () => {
  return (
    <Box>
      <RadioGroup
        direction="column"
        name="postDate"
        radioItems={[
          {
            label: "Todo",
            value: "all",
          },
          {
            label: "Hace 24 horas",
            value: 1,
          },
          {
            label: "Hace 7 días",
            value: 7,
          },
          {
            label: "Hace 30 días",
            value: 30,
          },
          {
            label: "Hace 1 año",
            value: 365,
          },
        ]}
      />
    </Box>
  );
};

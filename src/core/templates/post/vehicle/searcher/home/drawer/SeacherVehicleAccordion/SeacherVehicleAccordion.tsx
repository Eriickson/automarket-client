import React, { FC, useState } from "react";
import {
  chakra,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from "@chakra-ui/react";
import { AccordionItemFilter } from "./SeacherVehicleAccordionItems/filter/AccordionItemFilter";
import { AccordionItemOrderForm } from "./SeacherVehicleAccordionItems/order/AccordionItemOrderForm";
import { AccordionItemPostDateForm } from "./SeacherVehicleAccordionItems/postDate/AccordionItemPostDateForm";
import { PrimaryCard } from "@/components";
import styled from "@emotion/styled";
import { FormProvider, useForm } from "react-hook-form";

const WraperSeacherVehicleAccordionStyled = styled.div`
  .css-1hkuwzf {
    padding: 0;
  }
`;

export const SeacherVehicleAccordion: FC = () => {
  const methods = useForm();
  const [accordionItems] = useState([
    {
      title: "Filtro",
      Component: <AccordionItemFilter />,
    },
    {
      title: "Orden",
      Component: <AccordionItemOrderForm />,
    },
    {
      title: "Fecha de Publicación",
      Component: <AccordionItemPostDateForm />,
    },
  ]);

  return (
    <WraperSeacherVehicleAccordionStyled>
      <FormProvider {...methods}>
        <Accordion>
          {accordionItems.map((item, i) => (
            <AccordionItem key={i} mb="2">
              <PrimaryCard>
                <chakra.h2 borderBottomWidth="1px">
                  <AccordionButton _focus={{ ring: 0 }}>
                    <Box flex="1" textAlign="left">
                      <Text fontSize="sm" fontWeight="semibold">
                        {item.title}
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </chakra.h2>
                <AccordionPanel pb={4}>{item.Component}</AccordionPanel>
              </PrimaryCard>
            </AccordionItem>
          ))}
        </Accordion>
      </FormProvider>
    </WraperSeacherVehicleAccordionStyled>
  );
};

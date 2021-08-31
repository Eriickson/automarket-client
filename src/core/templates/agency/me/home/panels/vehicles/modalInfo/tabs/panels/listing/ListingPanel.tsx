import React, { FC } from "react";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from "@chakra-ui/react";
import { Listing } from "@/components";
import { IconMarquee2 } from "@tabler/icons";

export const ListingPanel: FC = () => {
  return (
    <div>
      <Accordion>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Accesorios
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Listing
              listing={[
                { IconList: IconMarquee2, label: "Nuevo" },
                { IconList: IconMarquee2, label: "Recien importado" },
                { IconList: IconMarquee2, label: "Aire Acondicionador" },
                { IconList: IconMarquee2, label: "No se Moja" },
              ]}
            />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Características
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Listing
              listing={[
                { IconList: IconMarquee2, label: "Nuevo" },
                { IconList: IconMarquee2, label: "Recien importado" },
                { IconList: IconMarquee2, label: "Aire Acondicionador" },
                { IconList: IconMarquee2, label: "No se Moja" },
              ]}
            />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

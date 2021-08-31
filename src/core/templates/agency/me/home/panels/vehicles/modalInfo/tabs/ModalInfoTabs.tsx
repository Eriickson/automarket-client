import React, { FC, useState } from "react";
import { DescriptionPanel, ImagesPanel, ListingPanel, OptionsPanel } from "./panels";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export const ModalInfoTabs: FC = () => {
  const [tabsList] = useState([
    {
      title: "Descripción",
      Component: DescriptionPanel,
    },
    {
      title: "Imágenes",
      Component: ImagesPanel,
    },
    {
      title: "Listados",
      Component: ListingPanel,
    },
    {
      title: "Opciones",
      Component: OptionsPanel,
    },
  ]);

  return (
    <div>
      <Tabs>
        <TabList>
          {tabsList.map((tab, i) => (
            <Tab key={i} _focus={{ ring: 0 }}>
              {tab.title}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {tabsList.map((tab, i) => (
            <TabPanel key={i}>
              <tab.Component />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </div>
  );
};

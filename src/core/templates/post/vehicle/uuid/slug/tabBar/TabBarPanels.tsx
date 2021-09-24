import React, { FC } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import { PrimaryCard } from "@/components";
import { InfoTab } from "./tabs/InfoTab";
import { DescriptionTab } from "./tabs/DescriptionTab";
import { ListsTab } from "./tabs/ListsTab";
import { AgencyPanel } from "./tabs/AgencyPanel";

export const TabBarPanels: FC = () => {
  const tabs = [
    {
      title: "Información",
      Component: InfoTab,
    },
    {
      title: "Descripción",
      Component: DescriptionTab,
    },
    {
      title: "Listas",
      Component: ListsTab,
    },
    {
      title: "Agencia",
      Component: AgencyPanel,
    },
  ];

  return (
    <Tabs>
      <TabList mb="-1" zIndex="0">
        {tabs.map(tab => (
          <Tab _focus={{ shadow: "none" }} key={tab.title}>
            {tab.title}
          </Tab>
        ))}
      </TabList>
      <Box position="relative" zIndex="1">
        <PrimaryCard>
          <TabPanels>
            {tabs.map(tab => (
              <TabPanel key={tab.title} p="0">
                <tab.Component />
              </TabPanel>
            ))}
          </TabPanels>
        </PrimaryCard>
      </Box>
    </Tabs>
  );
};

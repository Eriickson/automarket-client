import { PrimaryCard } from "@/components";
import { TabPanel, TabPanels } from "@chakra-ui/react";
import React, { FC } from "react";

import { ContactsPanel, VehiclesPanel } from "./panels";

export const AgencyTabPanels: FC = () => {
  return (
    <PrimaryCard>
      <TabPanels>
        <TabPanel p="0">
          <ContactsPanel />
        </TabPanel>
        <TabPanel p="0">
          <p>two!</p>
        </TabPanel>
        <TabPanel p="0">
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </PrimaryCard>
  );
};

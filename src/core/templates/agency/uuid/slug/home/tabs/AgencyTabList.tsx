import React, { FC } from "react";

import { TabList, Tab, Box } from "@chakra-ui/react";
import { ContactsPanel, VehiclesPanel } from "./panels";

export const AgencyTabList: FC = () => {
  return (
    <TabList w="full">
      <Tab
        _focus={{
          ring: "0",
        }}
      >
        One
      </Tab>
      <Tab
        _focus={{
          ring: "0",
        }}
      >
        Two
      </Tab>
      <Tab
        _focus={{
          ring: "0",
        }}
      >
        Three
      </Tab>
    </TabList>
  );
};

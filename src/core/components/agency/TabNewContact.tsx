import React, { FC } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { NewNumberPhoneForm } from "./NewNumberPhoneForm";

interface TabNewContactProps {
  onClose(): void;
}

export const TabNewContact: FC<TabNewContactProps> = ({ onClose }) => {
  return (
    <Tabs>
      <TabList>
        <Tab>Número Telefónico</Tab>
        <Tab>Correo electrónico</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <NewNumberPhoneForm onClose={onClose} />
        </TabPanel>
        <TabPanel>{/* <NewEmailForm control={methods.control} onSubmit={onSubmit} /> */}</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

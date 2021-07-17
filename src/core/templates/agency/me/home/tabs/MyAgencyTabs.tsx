import React, { FC, useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Text } from "@chakra-ui/react";
import { IconCar, IconHome, IconMapPin, IconPhone } from "@tabler/icons";
import { HomePanel, VehiclesPanel, ContactsPanel, UbicationPanel } from "./panels";

export const MyAgencyTabs: FC = () => {
  const [tabs] = useState([
    // {
    //   title: "Inicio",
    //   Icon: <IconHome />,
    //   Component: HomePanel,
    // },
    {
      title: "Vehículos",
      Icon: <IconCar />,
      Component: VehiclesPanel,
    },
    {
      title: "Contactos",
      Icon: <IconPhone />,
      Component: ContactsPanel,
    },
    {
      title: "Ubicación",
      Icon: <IconMapPin />,
      Component: UbicationPanel,
    },
  ]);

  return (
    <Tabs>
      <TabList>
        {tabs.map((tab, i) => (
          <Tab
            px="6"
            alignItems="center"
            fontWeight="semibold"
            _selected={{
              borderColor: "pri.500",
              bgColor: "pri.100",
              color: "pri.600",
            }}
            _focus={{ ring: 0 }}
            key={i}
          >
            {tab.Icon}
            <Text ml="2">{tab.title}</Text>
          </Tab>
        ))}
      </TabList>
      <TabPanels px="0">
        {tabs.map((tab, i) => (
          <TabPanel px="0" key={i}>
            <tab.Component />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

import React, { FC, useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Text, Box, HStack, IconButton } from "@chakra-ui/react";
import { IconCar, IconMapPin, IconPhone } from "@tabler/icons";
import { VehiclesPanel, ContactsPanel, UbicationPanel } from "./panels";
import { MenuNew } from "../menu/MenuNew";

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
      <HStack>
        <Box bg="white" flex="1">
          <TabList>
            {tabs.map((tab, i) => (
              <Tab
                _focus={{ ring: 0 }}
                _selected={{
                  borderColor: "pri.500",
                  bgColor: "pri.100",
                  color: "pri.600",
                }}
                alignItems="center"
                fontWeight="semibold"
                key={i}
                px="6"
              >
                {tab.Icon}
                <Text ml="2">{tab.title}</Text>
              </Tab>
            ))}
          </TabList>
        </Box>
        <MenuNew />
      </HStack>
      <TabPanels px="0">
        {tabs.map((tab, i) => (
          <TabPanel key={i} px="0">
            <tab.Component />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

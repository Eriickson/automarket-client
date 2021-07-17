import React, { FC } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Tag, IconButton, Text, HStack, Box } from "@chakra-ui/react";
import { IconEdit, IconInfoCircle } from "@tabler/icons";
import { VehicleModalInfo } from "./modalInfo/VehicleModalInfo";
import Link from "next/link";

export const VehiclesTable: FC = () => {
  return (
    <Box maxW="full" overflow="auto">
      <Table size="sm">
        <Thead>
          <Tr>
            <Th></Th>
            <Th>Marca</Th>
            <Th>Modelo</Th>
            <Th>Año</Th>
            <Th>Precio</Th>
            <Th>Agregado</Th>
            <Th>Vistas</Th>
          </Tr>
        </Thead>
        <Tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(key => (
            <Tr key={key}>
              <Td w="8" isNumeric minw="max-content">
                <HStack>
                  <Link href="/post/vehicle/123456789/edit">
                    <a>
                      <IconButton
                        size="sm"
                        colorScheme="warning"
                        aria-label="Open modal info vehicle"
                        icon={<IconEdit size="1.25rem" />}
                      />
                    </a>
                  </Link>
                  <VehicleModalInfo />
                </HStack>
              </Td>
              <Td>
                <Text w="max-content" fontWeight="medium">
                  Toyota
                </Text>
              </Td>
              <Td>
                <Text w="max-content" fontWeight="medium">
                  Corolla
                </Text>
              </Td>
              <Td>
                <Text w="max-content" fontWeight="medium">
                  2021
                </Text>
              </Td>
              <Td>
                <Text w="max-content" fontWeight="medium">
                  RD$ 250,000
                </Text>
              </Td>
              <Td>
                <Text w="max-content" fontWeight="medium">
                  21 Jul. 2020
                </Text>
              </Td>
              <Td>
                <Tag bgColor="green.500" color="white">
                  586
                </Tag>
              </Td>
            </Tr>
          ))}
        </Tbody>
        {/* <Tfoot>
        <Tr>
          <Th>To convert</Th>
          <Th>into</Th>
          <Th isNumeric>multiply by</Th>
        </Tr>
      </Tfoot> */}
      </Table>
    </Box>
  );
};

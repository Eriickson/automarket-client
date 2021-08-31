import React, { FC } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Tag, IconButton, Text, HStack, Box } from "@chakra-ui/react";
import { IconEdit } from "@tabler/icons";
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
              <Td isNumeric minw="max-content" w="8">
                <HStack>
                  <Link href="/post/vehicle/123456789/edit">
                    <a>
                      <IconButton
                        aria-label="Open modal info vehicle"
                        colorScheme="warning"
                        icon={<IconEdit size="1.25rem" />}
                        size="sm"
                      />
                    </a>
                  </Link>
                  <VehicleModalInfo />
                </HStack>
              </Td>
              <Td>
                <Text fontWeight="medium" w="max-content">
                  Toyota
                </Text>
              </Td>
              <Td>
                <Text fontWeight="medium" w="max-content">
                  Corolla
                </Text>
              </Td>
              <Td>
                <Text fontWeight="medium" w="max-content">
                  2021
                </Text>
              </Td>
              <Td>
                <Text fontWeight="medium" w="max-content">
                  RD$ 250,000
                </Text>
              </Td>
              <Td>
                <Text fontWeight="medium" w="max-content">
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

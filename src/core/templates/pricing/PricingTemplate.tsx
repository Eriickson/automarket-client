import React, { FC } from "react";

import { MainLayout } from "@/layouts";
import {
  chakra,
  Button,
  Box,
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { PrimaryCard } from "@/components";

export const PricingTemplate: FC = () => {
  return (
    <MainLayout>
      <Flex alignItems="center" flexDir="column" textAlign="center">
        <Text fontSize="5xl" fontWeight="semibold">
          Plan de precios flexible para cada negocio
        </Text>
        <Text color="gray.600" fontWeight="medium" lineHeight="none" maxW="xl">
          Inicie una prueba de 14 días y comience a convertir sus conocimientos en un negocio comunitario en línea.
        </Text>
      </Flex>
      <Flex mb="4">
        <Button _focus={{ shadow: "none" }} colorScheme="pri" px="10">
          Mensual
        </Button>
        <Button _focus={{ shadow: "none" }}>
          Anual
          <chakra.span fontWeight="normal" pl="1">
            (ahorra 20%)
          </chakra.span>
        </Button>
      </Flex>
      <Box>
        <PrimaryCard>
          <Table>
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr border="1px solid #efefef">
                <Th border="1px solid #efefef">
                  <Box w="56"></Box>
                </Th>
                <Th border="1px solid #efefef" p="5">
                  <Box>
                    <Text fontSize="xl" fontWeight="semibold" mb="4">
                      Starter
                    </Text>
                    <Text fontSize="xs" fontWeight="normal" mb="3">
                      Para proyectos personales y pasatiempos
                    </Text>
                    <Button colorScheme="pri" w="full">
                      Únirse
                    </Button>
                  </Box>
                </Th>
                <Th border="1px solid #efefef" p="5">
                  <Box>
                    <Text fontSize="xl" fontWeight="semibold" mb="4">
                      Starter
                    </Text>
                    <Text fontSize="xs" fontWeight="normal" mb="3">
                      Para proyectos personales y pasatiempos
                    </Text>
                    <Button colorScheme="pri" w="full">
                      Únirse
                    </Button>
                  </Box>
                </Th>
                <Th border="1px solid #efefef" p="5">
                  <Box>
                    <Text fontSize="xl" fontWeight="semibold" mb="4">
                      Starter
                    </Text>
                    <Text fontSize="xs" fontWeight="normal" mb="3">
                      Para proyectos personales y pasatiempos
                    </Text>
                    <Button colorScheme="pri" w="full">
                      Únirse
                    </Button>
                  </Box>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td>0.91444</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th>multiply by</Th>
              </Tr>
            </Tfoot>
          </Table>
        </PrimaryCard>
      </Box>
    </MainLayout>
  );
};

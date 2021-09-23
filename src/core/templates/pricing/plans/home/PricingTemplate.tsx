import React, { FC, useState } from "react";

import { MainLayout } from "@/layouts";
import { chakra, Button, Flex, Text } from "@chakra-ui/react";
import { useSelector } from "@/store";
import { PlanList } from "./PlanList";

export const PricingTemplate: FC = () => {
  const { plans } = useSelector(store => store.pricing);
  const [duration, setDuration] = useState<"yearly" | "monthly">("monthly");
  const [percentage] = useState(10);

  return (
    <MainLayout>
      <Flex alignItems="center" flexDir="column" textAlign="center">
        <Text fontSize="5xl" fontWeight="semibold">
          Planes con precios flexibles para cada negocio
        </Text>
        <Text color="gray.600" fontWeight="medium" lineHeight="none" maxW="xl">
          Inicie una prueba de 14 días y comience a convertir sus conocimientos en un negocio comunitario en línea.
        </Text>
      </Flex>
      <Flex mb="4" mx="auto" my="6" w="max-content">
        <Button
          _focus={{ shadow: "none" }}
          colorScheme={duration === "monthly" ? "pri" : "gray"}
          px="10"
          onClick={() => setDuration("monthly")}
        >
          Mensual
        </Button>
        <Button
          _focus={{ shadow: "none" }}
          colorScheme={duration === "yearly" ? "pri" : "gray"}
          onClick={() => setDuration("yearly")}
        >
          Anual
          <chakra.span fontWeight="normal" pl="1">
            (ahorra ${percentage}%)
          </chakra.span>
        </Button>
      </Flex>
      <PlanList duration={duration} percentage={percentage} plans={plans} />
    </MainLayout>
  );
};
/* <Box>
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
      </Box> */

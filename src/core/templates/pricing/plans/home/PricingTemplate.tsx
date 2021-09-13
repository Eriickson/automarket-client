import React, { FC } from "react";

import { MainLayout } from "@/layouts";
import {
  Box,
  chakra,
  Button,
  Flex,
  Text,
  SimpleGrid,
  GridItem,
  VStack,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { PrimaryCard } from "@/components";
import numeral from "numeral";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useQuery } from "@apollo/client";
import { GetPlansPayload, GET_PLANS_Q } from "src/graphql/gql";
import { useSelector } from "@/store";
import Link from "next/link";

export const PricingTemplate: FC = () => {
  const { plans } = useSelector(store => store.pricing);

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
      <Flex border="2px solid" borderColor="gray.100" mb="4" mx="auto" my="6" w="max-content">
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
      <SimpleGrid columns={10} gap={2}>
        {plans
          .filter(({ name }) => name !== "Free")
          .map(plan => (
            <GridItem colSpan={[2]} key={plan.id}>
              <PrimaryCard>
                <VStack alignItems="stretch" spacing={5}>
                  <Box>
                    <Text fontFamily="mono" fontSize="2xl" fontWeight="semibold">
                      {plan.name}
                    </Text>
                    <Text color="gray.500" fontSize="sm" lineHeight="normal">
                      {plan.description}
                    </Text>
                  </Box>
                  <Box>
                    <Text>
                      <chakra.span fontSize="3xl" fontWeight="bold" letterSpacing="-1px">
                        ${numeral(plan.pricing).format("0,0.00")}
                      </chakra.span>
                      /mes
                    </Text>
                  </Box>
                  <Box>
                    <Text color="gray.500" fontWeight="medium">
                      Que está incluido en este plan?
                    </Text>
                    <List fontSize="sm">
                      <ListItem fontWeight="medium">
                        <ListIcon as={CheckCircleIcon} color="pri.500" />
                        Hasta{" "}
                        <chakra.span color="pri.600" textDecoration="underline">
                          {plan.benefits.posts} Publicaciones
                        </chakra.span>
                      </ListItem>
                      <ListItem fontWeight="medium">
                        <ListIcon as={CheckCircleIcon} color="pri.500" />
                        Tendrás hasta
                        <chakra.span color="pri.600" textDecoration="underline">
                          {" "}
                          {plan.benefits.branches} sucursales
                        </chakra.span>
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckCircleIcon} color="pri.500" />
                        <chakra.span fontWeight="medium">
                          Sube{" "}
                          <chakra.span color="pri.600" textDecoration="underline">
                            {plan.benefits.images} imágenes
                          </chakra.span>{" "}
                          por publicación
                        </chakra.span>
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckCircleIcon} color="pri.500" />
                        <chakra.span fontWeight="medium">
                          Posibilidad de tener{" "}
                          <chakra.span color="pri.600" textDecoration="underline">
                            {plan.benefits.imageCoverProfile} portadas
                          </chakra.span>
                        </chakra.span>
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckCircleIcon} color="pri.500" />
                        <chakra.span fontWeight="medium">Futuras características venideras</chakra.span>
                      </ListItem>
                    </List>
                  </Box>

                  <Link href={`/pricing/plans/${plan.name.toLowerCase()}`}>
                    <a>
                      <Button colorScheme="pri" w="full">
                        Comprar {plan.name}
                      </Button>
                    </a>
                  </Link>
                </VStack>
              </PrimaryCard>
            </GridItem>
          ))}
      </SimpleGrid>
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

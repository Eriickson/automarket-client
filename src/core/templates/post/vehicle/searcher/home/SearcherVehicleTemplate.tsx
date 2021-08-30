import { PrimaryCard } from "@/components";
import { MainLayout } from "@/layouts";
import { Avatar, Badge, Box, Flex, GridItem, Img, SimpleGrid, Text, Button } from "@chakra-ui/react";
import { IconCar } from "@tabler/icons";
import React, { FC } from "react";
import { FilterVehicleDrawer } from "./drawer/FilterVehicleDrawer";
import Link from "next/link";

const cars = [
  "https://www.focus2move.com/wp-content/uploads/2020/02/Hyundai-Santa_Fe-2019.jpg",
  "https://www.focus2move.com/wp-content/uploads/2019/12/Hyundai-Tucson-2019.jpg",
  "https://www.focus2move.com/wp-content/uploads/2019/10/Hyundai-Palisade-2020.jpg",
  "https://carnewschina.com/wp-content/uploads/2021/07/20210330202918961248976863106-800x600.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/BYD_Yuan_EV_facelift_003.jpg/1200px-BYD_Yuan_EV_facelift_003.jpg",
  "https://www.focus2move.com/wp-content/uploads/2020/02/Toyota-Hilux_Special_Edition-2019.jpg",
  "https://www.power-technology.com/wp-content/uploads/sites/7/2020/02/2466028903_6cc898ed7e_c.jpg",
  "https://www.focus2move.com/wp-content/uploads/2019/02/Toyota-RAV4-2019-2.jpg",
  "https://carnewschina.com/wp-content/uploads/2021/07/20210330202918961248976863106-800x600.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/BYD_Yuan_EV_facelift_003.jpg/1200px-BYD_Yuan_EV_facelift_003.jpg",
  "https://www.focus2move.com/wp-content/uploads/2020/02/Toyota-Hilux_Special_Edition-2019.jpg",
  "https://www.power-technology.com/wp-content/uploads/sites/7/2020/02/2466028903_6cc898ed7e_c.jpg",
];

export const SearcherVehicleTemplate: FC = () => {
  return (
    <MainLayout>
      <Box>
        <PrimaryCard>
          <Box alignItems="center" display="flex" justifyContent="space-between">
            <Box>
              <Text display="flex" fontWeight="medium">
                <IconCar height="1.5rem" width="1.5rem" />
                <Text fontWeight="bold" ml="1.5" mr="1">
                  250
                </Text>
                Resultados
              </Text>
            </Box>
            <Box>
              <FilterVehicleDrawer />
            </Box>
          </Box>
        </PrimaryCard>
        <SimpleGrid columns={12} gap={[2, null, 3]} mt={3}>
          {[...cars, ...cars, ...cars, ...cars].map((car, i) => (
            <GridItem colSpan={[6, null, 4, 3, 2]} key={i}>
              <Box bgColor="white" shadow="sm">
                <Link href="/post/vehicle/5784548/mi-carro-2020">
                  <a>
                    <Box pos="relative">
                      <Badge
                        bg="blackAlpha.700"
                        bottom="0"
                        color="white"
                        fontSize="md"
                        fontWeight="semibold"
                        pos="absolute"
                        right="0"
                      >
                        RD$ 250,000
                      </Badge>

                      <Img src={car} />
                    </Box>
                    <Box p="2">
                      <Flex>
                        <Avatar size="sm" src="https://bit.ly/sage-adebayo" />
                        <Box fontSize={["sm", null, "sm"]} fontWeight="semibold" ml="3">
                          Mercedes Benz GML 2595 Coupé - 2020
                          <Badge colorScheme="green" mb="1" ml="1">
                            New
                          </Badge>
                        </Box>
                      </Flex>
                      <Box display="flex" justifyContent="space-between"></Box>
                    </Box>
                  </a>
                </Link>
              </Box>
            </GridItem>
          ))}
        </SimpleGrid>
      </Box>
    </MainLayout>
  );
};
/* <GridItem colSpan={[6, null, 4, 3, 2]} key={i}>
              <Box bgColor="white" shadow="sm">
                <Link href="/post/vehicle/5784548/mi-carro-2020">
                  <a>
                    <Box pos="relative">
                      <Badge
                        bg="blackAlpha.700"
                        bottom="0"
                        color="white"
                        fontSize="md"
                        fontWeight="semibold"
                        pos="absolute"
                        right="0"
                      >
                        RD$ 250,000
                      </Badge>

                      <Img src={car} />
                    </Box>
                    <Box p="2">
                      <Flex>
                        <Avatar size="sm" src="https://bit.ly/sage-adebayo" />
                        <Box fontSize={["sm", null, "sm"]} fontWeight="semibold" ml="3">
                          Mercedes Benz GML 2595 Coupé - 2020
                          <Badge colorScheme="green" mb="1" ml="1">
                            New
                          </Badge>
                        </Box>
                      </Flex>
                      <Box display="flex" justifyContent="space-between"></Box>
                    </Box>
                  </a>
                </Link>
              </Box>
            </GridItem> */
/* <GridItem colSpan={[12]} key={i}>
              <Box bgColor="white" shadow="sm">
                <Link href="/post/vehicle/5784548/mi-carro-2020">
                  <a>
                    <Flex>
                      <Box pos="relative" w="48">
                        <Img src={car} />
                      </Box>
                      <Box p="2">
                        <Flex flexDir="column" h="full" justifyContent="space-between">
                          <Box fontSize={["sm", null, "sm"]} fontWeight="semibold" mb="3">
                            <Badge borderBottomColor="green.700" borderBottomWidth="2px" colorScheme="green" mr="1">
                              New
                            </Badge>
                            Mercedes Benz GML 2595 Coupé - 2020
                          </Box>
                          <Flex>
                            <Avatar mr="2" size="sm" src="https://bit.ly/sage-adebayo" />
                            <Text fontWeight="semibold">Erickson Auto import</Text>
                          </Flex>
                          <Flex>
                            <Button colorScheme="pri" size="sm" variant="outline">
                              Ver detalles
                            </Button>
                          </Flex>
                        </Flex>
                      </Box>
                    </Flex>
                    {/* <Badge
                          bg="blackAlpha.700"
                          bottom="0"
                          color="white"
                          fontSize="md"
                          fontWeight="semibold"
                          pos="absolute"
                          right="0"
                        >
                          RD$ 250,000
                        </Badge> 
                        </a>
                        </Link>
                      </Box>
                    </GridItem> */

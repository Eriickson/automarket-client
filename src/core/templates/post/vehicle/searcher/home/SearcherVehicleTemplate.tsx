import { PrimaryCard } from "@/components";
import { MainLayout } from "@/layouts";
import { Avatar, Badge, Box, Flex, GridItem, Img, SimpleGrid, Text } from "@chakra-ui/react";
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
        <SimpleGrid columns={12} gap={[1, null, 3]} mt={3}>
          {[...cars, ...cars, ...cars, ...cars].map((car, i) => (
            <GridItem colSpan={[12, 6, 4, 3, 2]} key={i}>
              <Box bgColor="white" shadow="sm">
                <Link href="/post/vehicle/5784548/mi-carro-2020">
                  <a>
                    <Box pos="relative">
                      <Badge
                        bg="blackAlpha.700"
                        color="white"
                        pos="absolute"
                        bottom="0"
                        right="0"
                        fontSize="sm"
                        fontWeight="semibold"
                      >
                        RD$ 250,000
                      </Badge>

                      <Img src={car} />
                    </Box>
                    <Box p="2">
                      <Flex>
                        <Avatar size="sm" src="https://bit.ly/sage-adebayo" />
                        <Box fontSize={["xs", null, "sm"]} fontWeight="semibold" ml="3">
                          Mercedes Benz GML 2595 Coupé - 2020
                          <Badge mb="1" ml="1" colorScheme="green">
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

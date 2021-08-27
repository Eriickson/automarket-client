import React, { FC } from "react";

// NextJS
import Link from "next/link";

// Packages
import {
  Box,
  Text,
  GridItem,
  Img,
  SimpleGrid,
  Link as ChakraLink,
  Badge,
  Flex,
  Avatar,
  Heading,
} from "@chakra-ui/react";

// My Components
import { PrimaryCard } from "@/components";

const vehiclesArray = [
  "https://i.pinimg.com/originals/8e/6f/1c/8e6f1ccc03d808ac32758d7c26ca9802.jpg",
  "https://i.pinimg.com/originals/0e/18/29/0e1829c75781fb291c6470b0e5c66dcb.jpg",
  "http://www.placervial.com/2/images/wallpapers/g/636b776706d9f11234ad3370ce90c1fb.jpg",
  "https://i.pinimg.com/originals/d1/86/81/d18681f3f21fc543f369635ad00dc80d.jpg",
  "https://preview2.netcarshow.com/Honda-Civic_Si_Sport_Concept-2005-1600-04.jpg",
  "https://img.wallpapic.es/i502-721-515/medium/carros-kia-sorento-transversal-fondo-de-pantalla.jpg",
];

export const RecientPosts: FC = () => {
  return (
    <>
      <SimpleGrid columns={12} gap={[1, 2, 3]}>
        {[...vehiclesArray, ...vehiclesArray, ...vehiclesArray].map((vehicle, i) => (
          <GridItem colSpan={[6, null, 4, 3, 2]} key={i}>
            <Box bgColor="white" shadow="sm">
              <Link href="/post/vehicle/5784548/mi-carro-2020">
                <a>
                  <ChakraLink>
                    <Box pos="relative">
                      <Badge
                        bg="blackAlpha.700"
                        bottom="0"
                        color="white"
                        fontSize="sm"
                        fontWeight="semibold"
                        pos="absolute"
                        right="0"
                      >
                        RD$ 250,000
                      </Badge>

                      <Img src={vehicle} />
                    </Box>
                    <Box p="2">
                      <Flex>
                        <Avatar size="sm" src="https://bit.ly/sage-adebayo" />
                        <Box fontSize={["xs", null, "sm"]} fontWeight="semibold" ml="3">
                          Mercedes Benz GML 2595 Coupé - 2020
                          <Badge colorScheme="green" mb="1" ml="1">
                            New
                          </Badge>
                        </Box>
                      </Flex>
                      <Box display="flex" justifyContent="space-between"></Box>
                    </Box>
                  </ChakraLink>
                </a>
              </Link>
            </Box>
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
};
/*  <Box>
              <Box borderWidth="2px" cursor="pointer" position="relative">
                <Link passHref href="/post/vehicle/5784548/mi-carro-2020">
                  <a>
                    <Img src={vehicle} />
                  </a>
                </Link>
              </Box>
              <Text fontSize={["sm", null, "md"]} fontWeight="semibold" lineHeight="normal">
                Toyota Corolla S - 2020
              </Text>
              <Text color="green.600" fontSize={["xs", null, "md"]} fontWeight="semibold">
                RD$ 25,000
              </Text>
            </Box> */

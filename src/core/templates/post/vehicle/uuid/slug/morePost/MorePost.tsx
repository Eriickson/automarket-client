import { PrimaryCard } from "@/components";
import { Avatar, Badge, Box, Flex, Heading, Img, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export const MorePost: FC = () => {
  return (
    <>
      <Heading fontSize={["md", null, "lg"]} mb="3">
        Más publicaciones
      </Heading>
      <Swiper slidesPerView={6} spaceBetween={10}>
        {Array(10)
          .fill(0)
          .map((item, i) => (
            <SwiperSlide key={i}>
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

                        <Img src="https://uhdwallpapers.org/uploads/converted/19/01/13/mercedes-benz-cla-250-amg-1920x1080_578865-mm-90.jpg" />
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
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

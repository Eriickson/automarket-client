import React, { FC } from "react";

import { PrimaryCard } from "@/components";
import { Box, Text, GridItem, Img, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";

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
    <PrimaryCard notBorderTop>
      <SimpleGrid columns={12} gap={[1, 2, 3]}>
        {[...vehiclesArray, ...vehiclesArray, ...vehiclesArray].map((vehicle, i) => (
          <GridItem colSpan={[6, null, 4, 3, 2]} key={i}>
            <Box>
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
            </Box>
          </GridItem>
        ))}
      </SimpleGrid>
    </PrimaryCard>
  );
};

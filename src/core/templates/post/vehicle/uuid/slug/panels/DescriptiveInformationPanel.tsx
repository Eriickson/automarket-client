import React, { FC } from "react";

import { GridItem, Heading, Img, SimpleGrid, Text } from "@chakra-ui/react";

import { PrimaryCard } from "@/components";

export const DescriptiveInformationPanel: FC = () => {
  return (
    <PrimaryCard notBorderTop>
      <Heading mb="3" size="md">
        Información Descriptiva
      </Heading>
      <SimpleGrid columns={12} gap={3}>
        <GridItem colSpan={6} display="flex">
          <Img alt="" mr="3" src="https://www.flaticon.com/svg/static/icons/svg/1253/1253323.svg" w="8" />
          <Text fontWeight="medium">Marca:</Text>
        </GridItem>
        <GridItem colSpan={6} display="flex">
          <Img alt="" mr="3" src="https://www.flaticon.com/svg/static/icons/svg/1705/1705367.svg" w="8" />
          <Text fontWeight="medium">Modelo:</Text>
        </GridItem>
        <GridItem colSpan={6} display="flex">
          <Img alt="" mr="3" src="https://www.flaticon.com/svg/static/icons/svg/2052/2052444.svg" w="8" />
          <Text fontWeight="medium">Color Interior:</Text>
        </GridItem>
        <GridItem colSpan={6} display="flex">
          <Img alt="" mr="3" src="https://www.flaticon.com/svg/static/icons/svg/2761/2761393.svg" w="8" />
          <Text fontWeight="medium">Color de Pintura:</Text>
        </GridItem>
        <GridItem colSpan={6} display="flex">
          <Img alt="" mr="3" src="https://www.flaticon.com/svg/static/icons/svg/2893/2893019.svg" w="8" />
          <Text fontWeight="medium">Combustible:</Text>
        </GridItem>
        <GridItem colSpan={6} display="flex">
          <Img alt="" mr="3" src="https://www.flaticon.com/svg/static/icons/svg/1455/1455330.svg" w="8" />
          <Text fontWeight="medium">Recorrido:</Text>
        </GridItem>
        <GridItem colSpan={6} display="flex">
          <Img alt="" mr="3" src="https://www.flaticon.com/svg/static/icons/svg/3208/3208749.svg" w="8" />
          <Text fontWeight="medium">Año:</Text>
        </GridItem>
        <GridItem colSpan={6} display="flex">
          <Img alt="" mr="3" src="https://www.flaticon.com/svg/static/icons/svg/1464/1464738.svg" w="8" />
          <Text fontWeight="medium">Cilindros:</Text>
        </GridItem>
        <GridItem colSpan={6} display="flex">
          <Img alt="" mr="3" src="https://www.flaticon.com/svg/static/icons/svg/2481/2481225.svg" w="8" />
          <Text fontWeight="medium">Transmisión:</Text>
        </GridItem>
        <GridItem colSpan={6} display="flex">
          <Img alt="" mr="3" src="https://www.flaticon.com/svg/static/icons/svg/603/603512.svg" w="8" />
          <Text fontWeight="medium">Categoria:</Text>
        </GridItem>
        <GridItem colSpan={6} mr="3" display="flex">
          <Img
            alt=""
            src="https://www.flaticon.com/svg/vstatic/svg/501/501583.svg?token=exp=1617971441~hmac=1eb39747b503f18f03b5c0586a72b5c8"
            w="8"
          />
          <Text fontWeight="medium">Tracción:</Text>
        </GridItem>
        <GridItem colSpan={6} display="flex">
          <Img alt="" mr="3" src="https://www.flaticon.com/svg/static/icons/svg/3347/3347753.svg" w="8" />
          <Text fontWeight="medium">Cantidad de puertas:</Text>
        </GridItem>
        <GridItem colSpan={6} display="flex">
          <Img alt="" mr="3" src="https://www.flaticon.com/svg/static/icons/svg/809/809992.svg" w="8" />
          <Text fontWeight="medium">Cantidad de pasageros:</Text>
        </GridItem>
        <GridItem colSpan={6} display="flex">
          <Img
            alt=""
            mr="3"
            src="https://www.flaticon.es/svg/vstatic/svg/2947/2947656.svg?token=exp=1617971550~hmac=ced6e63eb14ba3737ad8cee4be1eaf12"
            w="8"
          />
          <Text fontWeight="medium">Versión:</Text>
        </GridItem>
      </SimpleGrid>
    </PrimaryCard>
  );
};
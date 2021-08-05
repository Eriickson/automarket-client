import { PrimaryCard } from "@/components";
import { Heading, HStack, Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react";
import numeral from "numeral";
import React, { FC } from "react";

export const StatisticsPanel: FC = () => {
  return (
    <PrimaryCard notBorderTop>
      <Heading fontSize={["md", null, "lg"]}>Estadísticas</Heading>
      <HStack>
        <Stat>
          <StatLabel>Publicaciones</StatLabel>
          <StatNumber>2</StatNumber>
          <StatHelpText>de 7</StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Sucursales</StatLabel>
          <StatNumber>0</StatNumber>
          <StatHelpText>2</StatHelpText>
        </Stat>
        <Stat>
          <StatNumber></StatNumber>
          <StatLabel>Visitas/Mes</StatLabel>
          <StatNumber>+{numeral(9_999).format("0,0")}</StatNumber>
          <StatHelpText>en este mes</StatHelpText>
        </Stat>
      </HStack>
    </PrimaryCard>
  );
};

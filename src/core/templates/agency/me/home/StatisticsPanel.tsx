import { PrimaryCard } from "@/components";
import { useSelector } from "@/store";
import { Heading, HStack, Stat, StatLabel, StatNumber, Text } from "@chakra-ui/react";
import numeral from "numeral";
import React, { FC } from "react";

export const StatisticsPanel: FC = () => {
  const { branches } = useSelector(({ agency }) => agency.myAgency);

  return (
    <PrimaryCard notBorderTop>
      <Heading fontSize={["md", null, "lg"]}>Estadísticas</Heading>
      <HStack>
        <Stat>
          <StatLabel>Publicaciones</StatLabel>
          <StatNumber>
            <Text alignItems="flex-end" display="flex">
              0
              <Text color="gray.500" fontSize="sm" mb="1" ml="1">
                de 7
              </Text>
            </Text>
          </StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Sucursales</StatLabel>
          <StatNumber>
            <Text alignItems="flex-end" display="flex">
              {branches.length}
              <Text color="gray.500" fontSize="sm" mb="1" ml="1">
                de 2
              </Text>
            </Text>
          </StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Visitas/Mes</StatLabel>
          <StatNumber>
            <Text alignItems="flex-end" display="flex">
              +{numeral(9_999).format("0,0")}
            </Text>
          </StatNumber>
        </Stat>
      </HStack>
    </PrimaryCard>
  );
};

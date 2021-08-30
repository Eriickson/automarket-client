import { PrimaryCard } from "@/components";
import { Heading, HStack, Stat, StatHelpText, StatLabel, StatNumber, Text } from "@chakra-ui/react";
import numeral from "numeral";
import React, { FC } from "react";

export const StatisticsPanel: FC = () => {
  return (
    <PrimaryCard notBorderTop>
      <Heading fontSize={["md", null, "lg"]}>Estadísticas</Heading>
      <HStack>
        <Stat>
          <StatLabel>Publicaciones</StatLabel>
          <StatNumber>
            <Text alignItems="flex-end" display="flex">
              2
              <Text color="gray.500" fontSize="sm" mb="1" ml="1">
                {" "}
                de 7
              </Text>
            </Text>
          </StatNumber>
          {/* <StatHelpText>de 7</StatHelpText> */}
        </Stat>
        <Stat>
          <StatLabel>Sucursales</StatLabel>
          <StatNumber>
            <Text alignItems="flex-end" display="flex">
              1
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

import React, { FC, useState } from "react";

import { MainLayout } from "@/layouts";
import { chakra, Button, Flex, Text } from "@chakra-ui/react";
import { useSelector } from "@/store";
import { PlanList } from "./PlanList";

export const PricingTemplate: FC = () => {
  const { plans } = useSelector(store => store.pricing);
  const [duration, setDuration] = useState<"yearly" | "monthly">("monthly");
  const [percentage] = useState(10);

  return (
    <MainLayout>
      <Flex alignItems="center" flexDir="column" textAlign="center">
        <Text fontSize={["2xl", null, "3xl", "4xl", "5xl"]} fontWeight="semibold">
          <chakra.span color="pri.500">Precios flexibles</chakra.span> para cada agencia
        </Text>
        <Text color="gray.600" fontWeight="medium" lineHeight="none" maxW="xl">
          Inicie una prueba de 14 días y comience a darse cuenta del potencial de esta herramienta que se hará
          indispensable para su agencia.
        </Text>
      </Flex>
      <Flex mb="4" mx="auto" my="6" w="max-content">
        <Button
          _focus={{ shadow: "none" }}
          colorScheme={duration === "monthly" ? "pri" : "gray"}
          px="10"
          onClick={() => setDuration("monthly")}
        >
          Mensual
        </Button>
        <Button
          _focus={{ shadow: "none" }}
          colorScheme={duration === "yearly" ? "pri" : "gray"}
          onClick={() => setDuration("yearly")}
        >
          Anual
          <chakra.span fontWeight="normal" pl="1">
            (ahorra ${percentage}%)
          </chakra.span>
        </Button>
      </Flex>
      <PlanList duration={duration} percentage={percentage} plans={plans} />
    </MainLayout>
  );
};

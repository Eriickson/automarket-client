import React, { FC } from "react";

import { MainLayout } from "@/layouts";
import { PrimaryCard } from "@/components";
import { chakra, Box, Text, Divider, Button } from "@chakra-ui/react";

export const PlanNameTemplate: FC = () => {
  return (
    <MainLayout>
      <div>
        <Box bgColor="white" boxShadow="sm" display="flex" p="8">
          <Box flex="1" mr="8">
            <Box>
              <Text fontSize="4xl" fontWeight="black" mb="2">
                Lifetime Membership
              </Text>
              <Text color="gray.400" fontSize="lg" fontWeight="medium" mb="6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum, amet autem reprehenderit eius
                iure.
              </Text>
            </Box>
            <Box alignItems="center" display="flex">
              <Text color="pri.500" fontSize="lg" fontWeight="medium" mr="4">
                Qué está incluido?
              </Text>
              <Divider border="2px solid" borderColor="black" flex="1" />
            </Box>
          </Box>
          <Box alignItems="center" display="flex" flexDir="column">
            <Text fontSize="xl" fontWeight="semibold">
              Este es el valor del plan
            </Text>
            <Text alignItems="center" display="flex" fontSize="4xl" fontWeight="black">
              $15,000
              <chakra.span color="gray.600" fontSize="xl" fontWeight="medium" ml="1">
                DOP
              </chakra.span>
            </Text>
            <Text mb="3">Lee más acerca de nuestras políticas</Text>
            <Button colorScheme="pri" size="lg" w="full">
              Obtener acceso
            </Button>
          </Box>
        </Box>
      </div>
    </MainLayout>
  );
};

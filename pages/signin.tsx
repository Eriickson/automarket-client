import { AutomarketRDLogo } from "@/assets";
import { InputControl, PrimaryCard } from "@/components";
import { useWindowSize } from "@/hooks";
import { Button } from "@chakra-ui/button";
import { Box, Container, Divider, Flex, HStack, Text, VStack, Link as ChakraLink } from "@chakra-ui/react";
import React, { FC } from "react";
import { Divide } from "react-feather";
import { FormProvider, useForm } from "react-hook-form";
import Link from "next/link";

const Signin: FC = () => {
  const { height } = useWindowSize();
  const methods = useForm();
  return (
    <Box
      alignItems="stretch"
      bgColor="gray.50"
      border="3px solid red"
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      style={{ height }}
    >
      <Container bgColor="white" py="4" shadow="sm">
        <Box w="60">
          <AutomarketRDLogo />
        </Box>
      </Container>
      <Container>
        <Box my="4">
          <FormProvider {...methods}>
            <PrimaryCard>
              <Box>
                <Text fontSize="3xl" fontWeight="medium" mb="4" textAlign="center">
                  Bienvenido de nuevo
                </Text>
                <VStack spacing={4}>
                  <InputControl isRequired inputProps={{ size: "lg" }} label="Identificador" name="identifier" />
                  <InputControl isRequired inputProps={{ size: "lg" }} label="Contraseña" name="password" />
                  <Button colorScheme="pri" size="lg" w="full">
                    Iniciar sesión
                  </Button>
                </VStack>
                <Text my="3" textAlign="center">
                  O
                </Text>
                <VStack mb="3" spacing={4}>
                  <Button fontWeight="medium" py="6" variant="outline" w="full">
                    Continua con Google
                  </Button>
                  <Button fontWeight="medium" py="6" variant="outline" w="full">
                    Continua con Facebook
                  </Button>
                </VStack>
                <Text textAlign="center">
                  ¿Es la primera vez que usas Automarket RD?
                  <Link href="/">
                    <ChakraLink color="blue.600" ml="1" textDecor="underline">
                      Regístrate
                    </ChakraLink>
                  </Link>
                </Text>
              </Box>
            </PrimaryCard>
          </FormProvider>
        </Box>
      </Container>
      <Box h="24"></Box>
    </Box>
  );
};

export default Signin;

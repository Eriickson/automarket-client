import { PrimaryCard } from "@/components";
import { MainLayout } from "@/layouts";
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import Link from "next/link";
import { FaqAccordion } from "./FaqAccordion";

export const FaqTemplate: FC = () => {
  return (
    <MainLayout>
      <VStack alignItems="stretch" maxW="4xl" mx="auto">
        {/* <PrimaryCard> */}
        <Box w="full">
          <Heading mb="3" size="md" textAlign="center">
            Pregunta y respuestas frecuentes
          </Heading>
          <Box>
            <FaqAccordion />
          </Box>
        </Box>
        {/* </PrimaryCard> */}
        <PrimaryCard notBorderTop>
          <Box alignItems="center" display="flex" flexDir="column" textAlign="center">
            <Heading mb="1" size="md">
              ¿No encontró respuestas a sus preguntas?
            </Heading>
            <Text color="gray.500" fontSize="sm" lineHeight="none" maxW="md" mb="8">
              Póngase en contacto con nosotros para obtener más detalles y así no se quede con ninguna duda
            </Text>
            <Link href="/about-us/contacts">
              <a>
                <Button colorScheme="pri" size="lg">
                  Contactanos
                </Button>
              </a>
            </Link>
            <Text color="gray.500" fontSize="sm" mt="8">
              Gracias por preferirnos
            </Text>
          </Box>
        </PrimaryCard>
      </VStack>
    </MainLayout>
  );
};

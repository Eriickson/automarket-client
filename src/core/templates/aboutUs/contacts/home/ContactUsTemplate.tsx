import React, { FC } from "react";

// NextJS
import Link from "next/link";

// Packages

import { Link as ChakraLink, Box, Text } from "@chakra-ui/react";

// My Components
import { PrimaryCard } from "@/components";
import { MainLayout } from "@/layouts";
import { ContactUsForm } from "./form/ContactUsForm";

export const ContactUsTemplate: FC = () => {
  return (
    <MainLayout>
      <PrimaryCard>
        <Box maxW="xl" mx="auto">
          <Box textAlign="center">
            <Text fontSize="3xl" fontWeight="semibold">
              Comuníquese con nosotros
            </Text>
            <Text color="gray.500" fontSize="sm" lineHeight="none">
              Tenemos una sesión de{" "}
              <Link href="/about-us/faq">
                <a>
                  <ChakraLink color="pri.500" fontWeight="semibold" textDecor="underline">
                    Preguntas y respuestas
                  </ChakraLink>
                </a>
              </Link>
              . En caso de que esta no le ayude, no dude en contactarnos en cualquier momento. ¡Nos comunicaremos con
              usted lo antes posible!
            </Text>
          </Box>
          <ContactUsForm />
        </Box>
      </PrimaryCard>
    </MainLayout>
  );
};

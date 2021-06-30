import React, { FC } from "react";

// NextJS
import NextLink from "next/link";

// Packages
import axios from "axios";
import { Box, Heading, Text, Link } from "@chakra-ui/react";
import { getCsrfToken } from "next-auth/client";

// My Components
import { LoginLayout } from "@/layouts";
import { SignInForm } from "./SignInForm";
import { IFormSignInOnSubmit } from "@/validations";

export const SignInTemplate: FC = () => {
  async function onSubmit(values: IFormSignInOnSubmit) {
    const csrfToken = await getCsrfToken();
    try {
      const response = await axios.post("/api/auth/callback/credentials", {
        ...values,
        csrfToken,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <LoginLayout>
      <Box bg="white" borderColor="gray.100" borderWidth="1px" m="auto" maxWidth="md" mb="3" p="8" shadow="sm">
        <Heading as="h2" fontWeight="medium" mb="8" size="lg" textAlign="center">
          Iniciar Sesión
        </Heading>
        <SignInForm onSubmit={onSubmit} />
      </Box>
      <Text display="flex" justifyContent="center" textAlign="center">
        No Tienes cuenta?
        <NextLink href="signup">
          <Link color="blue.500" cursor="pointer" ml="1">
            Regístrate
          </Link>
        </NextLink>
      </Text>
    </LoginLayout>
  );
};

import React, { FC } from "react";

import { Box, Heading, Text, Link } from "@chakra-ui/react";
import { getCsrfToken } from "next-auth/client";

import { LoginLayout } from "@/layouts";
import NextLink from "next/link";
import axios from "axios";
import { useSession } from "next-auth/client";
import { SignInForm } from "./SignInForm";

export const SignInTemplate: FC = () => {
  const [session, loading] = useSession();

  console.log({ session, loading });

  async function onSubmit(e: any) {
    e.preventDefault();
    const csrfToken = await getCsrfToken();

    console.log({ csrfToken });

    try {
      await axios.post("/api/auth/callback/credentials", {
        identifier: "mi-identifier",
        password: "mi-password",
        csrfToken,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <LoginLayout>
      <Box p="8" borderWidth="1px" borderColor="gray.100" shadow="sm" bg="white" maxWidth="md" m="auto" mb="3">
        <Heading as="h2" size="lg" fontWeight="medium" textAlign="center" mb="8">
          Iniciar Sesión
        </Heading>
        <SignInForm
          onSubmit={values => {
            console.log(values);
          }}
        />
      </Box>
      <Text textAlign="center" display="flex" justifyContent="center">
        No Tienes cuenta?
        <NextLink href="signup">
          <Link color="blue.500" ml="1" cursor="pointer">
            Regístrate
          </Link>
        </NextLink>
      </Text>
    </LoginLayout>
  );
};

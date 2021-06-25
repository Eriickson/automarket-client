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
      <Box bg="white" borderColor="gray.100" borderWidth="1px" m="auto" maxWidth="md" mb="3" p="8" shadow="sm">
        <Heading as="h2" fontWeight="medium" mb="8" size="lg" textAlign="center">
          Iniciar Sesión
        </Heading>
        <SignInForm
          onSubmit={values => {
            console.log(values);
          }}
        />
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

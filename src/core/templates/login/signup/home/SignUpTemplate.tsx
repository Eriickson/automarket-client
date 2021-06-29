import React, { FC } from "react";
import { LoginLayout } from "@/layouts";
import { Box, Heading, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { SignUpForm } from "./SignUpForm";
import { IFormSignUpOnSubmit } from "@/validations";
import { api } from "@/utils";
import { useUIContext } from "@/context";
import Router from "next/router";

export const SignUpTemplate: FC = () => {
  const { activateLoadingScreen, closeLoadingScreen, alertDialog } = useUIContext();

  async function onSubmit(values: IFormSignUpOnSubmit) {
    activateLoadingScreen(null);
    try {
      const { data } = await api.post("/signup", values);
      console.log(data);
      alertDialog.onOpen({
        title: "Mensaje enviado",
        desc: "Por favor revisa tu bandeja de email, para que puedas confirmar tu cuenta",
        name: "send-email-register",
        priBtnLabel: "Volver a página de inicio",
        onClickPriBtn: () => {
          Router.push("/");
          alertDialog.onClose();
        },
      });
      closeLoadingScreen();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <LoginLayout>
      <Box bg="white" borderColor="gray.100" borderWidth="1px" m="auto" maxWidth="sm" mb="3" p="8" shadow="sm">
        <Box>
          <Heading as="h2" fontWeight="medium" mb="1.5" size="lg" textAlign="center">
            Regístrate
          </Heading>
          <Text color="gray.500" fontSize="sm" lineHeight="normal" mb="8" textAlign="center">
            Se le enviará un mensaje a su correo electrónico para verificarlo y pueda crear su cuenta.
          </Text>
        </Box>
        <SignUpForm onSubmit={onSubmit} />
      </Box>
      <Text display="flex" justifyContent="center" textAlign="center">
        Tienes cuenta?
        <NextLink href="signin">
          <Link color="blue.500" cursor="pointer" ml="1">
            Inicia Sesión
          </Link>
        </NextLink>
      </Text>
    </LoginLayout>
  );
};

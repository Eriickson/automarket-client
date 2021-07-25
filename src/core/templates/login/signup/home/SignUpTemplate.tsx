import React, { FC } from "react";

// NextJS
import Router from "next/router";

// My Elements
import { useSendEmailRegister } from "@/graphql";
import { useUIContext } from "@/context";
import { IFormSignUpOnSubmit } from "@/validations";

// My Components
import { SignUpForm } from "./SignUpForm";
import { NewLoginLayout } from "@/layouts";

export const SignUpTemplate: FC = () => {
  const { activateLoadingScreen, closeLoadingScreen, alertDialog, apolloServerError } = useUIContext();
  const { sendEmailRegister } = useSendEmailRegister();

  async function onSubmit(values: IFormSignUpOnSubmit) {
    activateLoadingScreen(null);
    try {
      await sendEmailRegister({ variables: { email: values.email } });

      alertDialog.onOpen({
        title: "Mensaje enviado",
        desc: "Por favor revisa tu bandeja de email, para que puedas confirmar tu cuenta",
        name: "send-email-register",
        priBtnLabel: "Volver a página de inicio",
        onClickPriBtn: async () => {
          await Router.push("/");
          alertDialog.onClose();
        },
      });
      closeLoadingScreen();
    } catch (err) {
      closeLoadingScreen();
      apolloServerError.onOpen(err.message, {
        priBtnLabel: "Aceptar",
        secBtnLabel: "Restablecer contraseña",
        onClickPriBtn: apolloServerError.onClose,
        onClickSecBtn: async () => {
          await Router.push("/login/reset-password", { query: { email: values.email } });
          apolloServerError.onClose();
        },
      });
    }
  }

  return (
    <NewLoginLayout>
      <SignUpForm onSubmit={onSubmit} />
    </NewLoginLayout>
  );
};

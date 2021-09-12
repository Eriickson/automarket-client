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
import { ApolloErrorComponent } from "@/components";

export const SignUpTemplate: FC = () => {
  const { activateLoadingScreen, closeLoadingScreen, alertDialog } = useUIContext();
  const { sendEmailRegister, error } = useSendEmailRegister();

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
    } catch (err: any) {
      closeLoadingScreen();
    }
  }

  return (
    <NewLoginLayout title="Regístrate">
      <SignUpForm onSubmit={onSubmit} />
      <ApolloErrorComponent error={error} />
    </NewLoginLayout>
  );
};

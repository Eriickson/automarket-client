import React, { FC } from "react";

// NextJS
import { useRouter } from "next/router";

// Packages
import axios from "axios";
import { getCsrfToken } from "next-auth/client";

// My Components
import { NewLoginLayout } from "@/layouts";
import { SignInForm } from "./SignInForm";
import { IFormSignInOnSubmit } from "@/validations";
import { useUIContext } from "@/context";

export const SignInTemplate: FC = () => {
  const { query } = useRouter();
  const { activateLoadingScreen, closeLoadingScreen } = useUIContext();

  async function onSubmit(values: IFormSignInOnSubmit) {
    activateLoadingScreen("Iniciando Sesión");
    const csrfToken = await getCsrfToken();
    try {
      await axios.post("/api/auth/callback/credentials", {
        ...values,
        csrfToken,
      });
      query.callbackUrl && location.replace(String(query.callbackUrl));
    } catch (err) {
      console.log(err);
      closeLoadingScreen();
    }
  }

  return (
    <NewLoginLayout title="Iniciar Sesión">
      <SignInForm onSubmit={onSubmit} />
    </NewLoginLayout>
  );
};

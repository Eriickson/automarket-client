import React, { FC } from "react";

// NextJS
import { useRouter } from "next/router";

// Packages
import axios from "axios";

// My Components
import { NewLoginLayout } from "@/layouts";
import { IFormSignInOnSubmit } from "@/validations";
import { useUIContext } from "@/context";
import { SignInForm } from "./SignInForm";

export const SignInTemplate: FC = () => {
  const { query } = useRouter();
  const { activateLoadingScreen, closeLoadingScreen } = useUIContext();

  async function onSubmit(values: IFormSignInOnSubmit) {
    activateLoadingScreen("Iniciando Sesión");

    type Response = {
      successful: boolean;
    };

    try {
      const { data } = await axios.post<Response>("/api/auth/signin", values);

      if (data.successful) {
        window.location.href = String(query.callbackUrl || "/");
      } else {
        closeLoadingScreen();
      }
    } catch (err) {
      closeLoadingScreen();
    }
  }

  return (
    <NewLoginLayout title="Iniciar Sesión">
      <SignInForm onSubmit={onSubmit} />
    </NewLoginLayout>
  );
};

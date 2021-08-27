import React, { FC } from "react";

// NextJS
import { useRouter } from "next/router";

// Packages
import axios from "axios";

// My Components
import { NewLoginLayout } from "@/layouts";
import { SignInForm } from "./SignInForm";
import { IFormSignInOnSubmit } from "@/validations";
import { useUIContext } from "@/context";

export const SignInTemplate: FC = () => {
  const { query } = useRouter();
  const { activateLoadingScreen, closeLoadingScreen } = useUIContext();

  async function onSubmit(values: IFormSignInOnSubmit) {
    // activateLoadingScreen("Iniciando Sesión");

    const { data } = await axios.post("/api/auth/signin", values);

    console.log(data);
  }

  return (
    <NewLoginLayout title="Iniciar Sesión">
      <SignInForm onSubmit={onSubmit} />
    </NewLoginLayout>
  );
};

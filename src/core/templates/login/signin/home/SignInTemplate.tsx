import React, { FC } from "react";

// NextJS
import Router, { useRouter } from "next/router";

// Packages
import axios from "axios";
import { getCsrfToken } from "next-auth/client";

// My Components
import { NewLoginLayout } from "@/layouts";
import { SignInForm } from "./SignInForm";
import { IFormSignInOnSubmit } from "@/validations";

export const SignInTemplate: FC = () => {
  const { query } = useRouter();

  async function onSubmit(values: IFormSignInOnSubmit) {
    const csrfToken = await getCsrfToken();
    try {
      await axios.post("/api/auth/callback/credentials", {
        ...values,
        csrfToken,
      });
      query.callbackUrl && Router.push(String(query.callbackUrl));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <NewLoginLayout title="Iniciar Sesión">
      <SignInForm onSubmit={onSubmit} />
    </NewLoginLayout>
  );
};

import React, { FC } from "react";

// Packages
import axios from "axios";
import { getCsrfToken } from "next-auth/client";

// My Components
import { NewLoginLayout } from "@/layouts";
import { SignInForm } from "./SignInForm";
import { IFormSignInOnSubmit } from "@/validations";

export const SignInTemplate: FC = () => {
  async function onSubmit(values: IFormSignInOnSubmit) {
    const csrfToken = await getCsrfToken();
    try {
      const { data } = await axios.post("/api/auth/callback/credentials", {
        ...values,
        csrfToken,
      });
      console.log(data);
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

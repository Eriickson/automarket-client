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
      const response = await axios.post("/api/auth/callback/credentials", {
        ...values,
        csrfToken,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <NewLoginLayout>
      <SignInForm onSubmit={onSubmit} />
    </NewLoginLayout>
  );
};

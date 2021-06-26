import React, { FC } from "react";

import { LoginLayout } from "@/layouts";

import { RegisterForm } from "./RegisterForm";

import { RegisterUserOnSubmitFormType } from "@/validations";

export const RegisterTemplate: FC = () => {
  async function onSubmit(values: RegisterUserOnSubmitFormType) {
    console.log(values);
  }

  return (
    <LoginLayout>
      <RegisterForm onSubmit={onSubmit} />
    </LoginLayout>
  );
};

import React, { FC } from "react";

import { LoginLayout } from "@/layouts";

import { RegisterForm } from "./RegisterForm";

export const RegisterTemplate: FC = () => {
  return (
    <LoginLayout>
      <RegisterForm />
    </LoginLayout>
  );
};

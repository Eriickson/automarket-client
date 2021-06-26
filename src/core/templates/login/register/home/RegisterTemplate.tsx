import React, { FC } from "react";

import { LoginLayout } from "@/layouts";

import { RegisterForm } from "./RegisterForm";

import { RegisterUserOnSubmitFormType } from "@/validations";

import { useRegisterUser } from "@/graphql";
import { RegisterUserVariables } from "src/graphql/gql/mutations";

export const RegisterTemplate: FC = () => {
  const { registerUser, loading, error } = useRegisterUser();

  async function onSubmit(values: RegisterUserOnSubmitFormType) {
    const { profilePicture, name, lastname, province, municipality, birthday, sex, username, password } = values;
    const newUser: RegisterUserVariables["user"] = {
      profilePicture: {
        croppedArea: profilePicture.croppedArea,
        file: profilePicture.file,
        rotation: profilePicture.rotation,
      },
      name,
      lastname,
      direction: {
        province: String(province.value),
        municipality: String(municipality.value),
      },
      birthday,
      sex,
      username,
      password,
    };

    console.log(newUser);

    registerUser({
      variables: {
        user: newUser,
      },
    });
  }

  return (
    <LoginLayout>
      <RegisterForm onSubmit={onSubmit} />
    </LoginLayout>
  );
};

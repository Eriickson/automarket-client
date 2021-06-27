import React, { FC } from "react";

import { LoginLayout } from "@/layouts";

import { RegisterForm } from "./RegisterForm";

import { RegisterUserOnSubmitFormType } from "@/validations";

import { useRegisterUser } from "@/graphql";
import { RegisterUserVariables } from "src/graphql/gql/mutations";
import { useUIContext } from "@/context";

export const RegisterTemplate: FC = () => {
  const { activateLoadingScreen, closeLoadingScreen } = useUIContext();
  const { registerUser, loading, error } = useRegisterUser();

  async function onSubmit(values: RegisterUserOnSubmitFormType) {
    // activateLoadingScreen("Creando cuenta");
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

    try {
      registerUser({
        variables: {
          user: newUser,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <LoginLayout>
      <RegisterForm onSubmit={onSubmit} />
    </LoginLayout>
  );
};

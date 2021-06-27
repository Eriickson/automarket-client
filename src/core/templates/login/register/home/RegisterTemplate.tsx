import React, { FC } from "react";

import { LoginLayout } from "@/layouts";

import { RegisterForm } from "./RegisterForm";

import { RegisterUserOnSubmitFormType } from "@/validations";

import { useRegisterUser } from "@/graphql";
import { RegisterUserVariables } from "src/graphql/gql/mutations";
import { useUIContext } from "@/context";
import { useEffect } from "react";

export const RegisterTemplate: FC = () => {
  const { activateLoadingScreen, closeLoadingScreen } = useUIContext();
  const { registerUser, loading, error } = useRegisterUser();

  async function onSubmit(values: RegisterUserOnSubmitFormType) {
    const { profilePicture, name, lastname, province, municipality, birthday, sex, username, password } = values;

    const newUser: RegisterUserVariables["user"] = {
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

    profilePicture.file &&
      Object.assign(newUser, {
        profilePicture: {
          croppedArea: profilePicture.croppedArea,
          file: profilePicture.file,
          rotation: profilePicture.rotation,
        },
      });

    console.log(newUser);

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


  console.log({ error });

  useEffect(() => (loading ? activateLoadingScreen("Creando cuenta") : closeLoadingScreen()), [loading]);

  return (
    <LoginLayout>
      <RegisterForm onSubmit={onSubmit} />
    </LoginLayout>
  );
};

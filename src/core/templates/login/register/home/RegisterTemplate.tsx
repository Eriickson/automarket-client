import React, { FC } from "react";

import { LoginLayout } from "@/layouts";

import { RegisterForm } from "./RegisterForm";

import { RegisterUserOnSubmitFormType } from "@/validations";

import { useRegisterUser } from "@/graphql";
import { RegisterUserVariables } from "src/graphql/gql/mutations";
import { useUIContext } from "@/context";
import { useEffect } from "react";

export const RegisterTemplate: FC = () => {
  const { activateLoadingScreen, closeLoadingScreen, alertDialog } = useUIContext();
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

    try {
      await registerUser({
        variables: {
          user: newUser,
        },
      });
    } catch (err) {
      console.log(err);
      const error = JSON.parse(err.message);
      alertDialog.onOpen({
        name: "error-register-user",
        title: error.message,
        desc: error.detail,
        role: error.type,
        priBtnLabel: "Aceptar",
        onClickPriBtn: alertDialog.onClose,
      });
    }
  }

  useEffect(() => (loading ? activateLoadingScreen("Creando cuenta") : closeLoadingScreen()), [loading]);

  return (
    <LoginLayout>
      <RegisterForm onSubmit={onSubmit} />
    </LoginLayout>
  );
};

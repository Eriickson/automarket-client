import React, { FC } from "react";

import { LoginLayout } from "@/layouts";

import { RegisterForm } from "./RegisterForm";

import { RegisterUserOnSubmitFormType } from "@/validations";

import { useRegisterUser } from "@/graphql";
import { RegisterUserVariables } from "src/graphql/gql/mutations";
import { useUIContext } from "@/context";
import { useEffect } from "react";
import { api } from "@/utils";
import { getCsrfToken } from "next-auth/client";

export const RegisterTemplate: FC = () => {
  const { activateLoadingScreen, closeLoadingScreen, alertDialog, apolloServerError } = useUIContext();
  const { registerUser, loading, error } = useRegisterUser();

  async function onSubmit(values: RegisterUserOnSubmitFormType) {
    const csrfToken = await getCsrfToken();
    // console.log("submit", csrfToken);

    // try {
    //   const { data } = await api.post("/auth/callback/credentials", {
    //     identifier: "mi-identifier",
    //     password: "mi-password",
    //     csrfToken,
    //   });
    //   console.log({ data });
    // } catch (err) {
    //   console.log(err);
    // }
    // return;
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

    return;
    try {
      const response = await registerUser({
        variables: {
          user: newUser,
        },
      });
      console.log(response.data?.response);
    } catch (err) {
      apolloServerError.onOpen(err.message, {
        priBtnLabel: "Aceptar",
        onClickPriBtn: apolloServerError.onClose,
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

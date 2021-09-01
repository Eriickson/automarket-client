import React, { FC } from "react";

// My Elements
import { RegisterUserOnSubmitFormType } from "@/validations";
import { useRegisterUser } from "@/graphql";
import { useUIContext } from "@/context";

// My Components
import { LoginLayout } from "@/layouts";
import { RegisterForm } from "./RegisterForm";
import router, { useRouter } from "next/router";
import axios from "axios";

export const RegisterTemplate: FC = () => {
  const { activateLoadingScreen, closeLoadingScreen } = useUIContext();
  const { registerUser } = useRegisterUser();
  const { query } = useRouter();

  async function onSubmit(values: RegisterUserOnSubmitFormType) {
    activateLoadingScreen("Registrando usuario");
    const { profilePicture, name, lastname, province, municipality, birthday, sex, username, password } = values;
    const newUser = {
      name,
      lastname,
      direction: {
        provinceId: String(province.id),
        municipalityId: String(municipality.id),
      },
      birthday,
      sex,
      username,
      password,
    };

    profilePicture.file && Object.assign(newUser, { profilePicture });

    console.log(newUser);

    try {
      const { data } = await registerUser({ variables: { registerUserInput: newUser } });

      if (data && data.registerUser.successful) {
        await axios.post<Response>("/api/auth/signin", { identifier: username, password });
        window.location.href = "/me";
      }
    } catch (err) {
      closeLoadingScreen();
      console.log(err);
    }
  }

  return (
    <LoginLayout>
      <RegisterForm onSubmit={onSubmit} />
    </LoginLayout>
  );
};

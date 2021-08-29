import React, { FC, useEffect } from "react";

// My Elements
import { RegisterUserOnSubmitFormType } from "@/validations";
import { useRegisterUser } from "@/graphql";
import { RegisterUserVariables } from "src/graphql/gql/mutations";
import { useUIContext } from "@/context";

// My Components
import { LoginLayout } from "@/layouts";
import { RegisterForm } from "./RegisterForm";

export const RegisterTemplate: FC = () => {
  const { activateLoadingScreen, closeLoadingScreen, alertDialog, apolloServerError } = useUIContext();
  const { registerUser, loading } = useRegisterUser();

  async function onSubmit(values: RegisterUserOnSubmitFormType) {
    const { profilePicture, name, lastname, province, municipality, birthday, sex, username, password } = values;
    const { aspectRatio, cropArea, file, flip, id, point, originalFile, rotation, zoom } = profilePicture;
    const newUser: RegisterUserVariables["newUser"] = {
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

    profilePicture.file &&
      Object.assign(newUser, {
        profilePicture: { aspectRatio, cropArea, file, flip, id, point, rotation, zoom, originalFile },
      });

    try {
      const response = await registerUser({ variables: { newUser } });
      console.log(response);
    } catch (err) {
      // console.log(err);
      // apolloServerError.onOpen(err.message, {
      //   priBtnLabel: "Aceptar",
      //   onClickPriBtn: apolloServerError.onClose,
      // });
    }
  }

  // useEffect(() => (loading ? activateLoadingScreen("Creando cuenta") : closeLoadingScreen()), [loading]);

  return (
    <LoginLayout>
      <RegisterForm onSubmit={onSubmit} />
    </LoginLayout>
  );
};

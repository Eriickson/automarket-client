import React, { FC } from "react";

// My Elements
import { RegisterUserOnSubmitFormType } from "@/validations";
import { useRegisterUser } from "@/graphql";
import { RegisterUserPayload, RegisterUserVariables, REGISTER_USER_M } from "src/graphql/gql/mutations";
import { useUIContext } from "@/context";

// My Components
import { LoginLayout } from "@/layouts";
import { RegisterForm } from "./RegisterForm";
import { apolloClientCustom } from "src/config/apolloClientCustom";
import { useRouter } from "next/router";

export const RegisterTemplate: FC = () => {
  const { activateLoadingScreen, closeLoadingScreen, alertDialog, apolloServerError } = useUIContext();
  const { registerUser, loading } = useRegisterUser();
  const { query } = useRouter();

  async function onSubmit(values: RegisterUserOnSubmitFormType) {
    const { profilePicture, name, lastname, province, municipality, birthday, sex, username, password } = values;
    const { aspectRatio, cropArea, file, flip, id, point, originalFile, rotation, zoom } = profilePicture;
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

    profilePicture.file &&
      Object.assign(newUser, {
        profilePicture: { aspectRatio, cropArea, file, flip, id, point, rotation, zoom, originalFile },
      });

    try {
      const { data } = await apolloClientCustom.mutate<RegisterUserPayload, RegisterUserVariables>({
        mutation: REGISTER_USER_M,
        variables: { registerUserInput: newUser },
        context: { headers: { token: query.token } },
      });
      if (data && data.successful) {
        console.log("Se puede hacer algo");
      }
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

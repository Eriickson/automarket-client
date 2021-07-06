import React from "react";

// NextJS
import { useRouter } from "next/router";

// My elements
import { useUpdateUserProfile } from "@/graphql";
import { useSelector } from "@/store";
import { useUIContext } from "@/context";
import { EditProfileFormOnSubmit } from "@/validations";

// My Components
import { EditProfileForm } from "./EditProfileForm";

export const EditProfile = () => {
  let { profileMe } = useSelector(({ profile }) => profile);
  const { reload } = useRouter();
  const { updateUserProfile } = useUpdateUserProfile();
  const { activateLoadingScreen } = useUIContext();

  async function onSubmit(values: EditProfileFormOnSubmit) {
    activateLoadingScreen("Actualizando información");
    const { name, lastname, birthday, province, municipality, sex } = values;
    const newUserData = {
      name,
      lastname,
      direction: { province: String(province.value), municipality: String(municipality?.value) },
      birthday,
      sex,
      username: "",
      password: "",
    };

    try {
      await updateUserProfile({
        variables: {
          newUserData,
        },
      });

      reload();
    } catch (err) {
      console.log({ err });
    }
  }

  return <EditProfileForm onSubmit={onSubmit} />;
};

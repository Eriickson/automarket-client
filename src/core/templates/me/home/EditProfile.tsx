import { EditProfileFormOnSubmit } from "@/validations";
import React from "react";
import { EditProfileForm } from "./EditProfileForm";
import { useSelector } from "@/store";
import { useUpdateUserProfile } from "@/graphql";
import { useUIContext } from "@/context";
import { useRouter } from "next/router";

export const EditProfile = () => {
  let { profileMe } = useSelector(({ profile }) => profile);
  const { reload } = useRouter();
  const { updateUserProfile } = useUpdateUserProfile();
  const { activateLoadingScreen } = useUIContext();
  async function onSubmit(values: EditProfileFormOnSubmit) {
    activateLoadingScreen("Actualizando información");
    const { name, lastname, birthday, province, municipality, sex } = values;
    try {
      await updateUserProfile({
        variables: {
          newUserData: {
            name,
            lastname,
            direction: { province: String(province.value), municipality: String(municipality?.value) },
            birthday,
            sex,
            username: "",
            password: "",
          },
        },
      });

      reload();
    } catch (err) {
      console.log({ err });
    }
  }

  return <EditProfileForm onSubmit={onSubmit} />;
};
/* const currentInfoUser = {
      name: profileMe.
    }
    const newUserData = {
      name,
      lastname,
      birthday,
      direction: {
        province: province.value,
        municipality: municipality.value,
      },
      sex,
    }; */

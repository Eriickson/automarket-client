import React, { FC } from "react";

// NextJS
import router from "next/router";

// Packages
import axios from "axios";

// My elements
import { useUpdateUserProfile } from "@/graphql";
import { useUIContext } from "@/context";
import { EditProfileFormOnSubmit } from "@/validations";

// My Components
import { EditProfileForm } from "./EditProfileForm";

export const EditProfile: FC = () => {
  const { updateUserProfile } = useUpdateUserProfile();
  const { activateLoadingScreen, closeLoadingScreen } = useUIContext();

  async function onSubmit(values: EditProfileFormOnSubmit) {
    activateLoadingScreen("Guardando cambios");
    const { name, lastname, birthday, province, municipality, sex } = values;

    try {
      const { data } = await updateUserProfile({
        variables: {
          input: {
            name,
            lastname,
            direction: { provinceId: String(province.id), municipalityId: String(municipality?.id) },
            birthday,
            sex,
          },
        },
      });

      if (data && data.updateUserProfile.successful) {
        const { data } = await axios.post("/api/auth/refreshtoken");
        if (data.successful) router.reload();
      } else {
        closeLoadingScreen();
      }
    } catch (err) {
      closeLoadingScreen();
    }
  }

  return <EditProfileForm onSubmit={onSubmit} />;
};

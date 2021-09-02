import { useMutation } from "@apollo/client";
import {
  UpdateAgencyLogoPayload,
  UpdateAgencyLogoVariables,
  UPDATE_PROFILE_PICTURE_M,
} from "src/graphql/gql/mutations";
import { mutations } from "../../gql";

export const useUpdateAgencyLogo = () => {
  const [updateAgencyLogo, { ...options }] = useMutation<UpdateAgencyLogoPayload, UpdateAgencyLogoVariables>(
    UPDATE_PROFILE_PICTURE_M,
  );

  async function updateAgencyLogoFetch({ input }: UpdateAgencyLogoVariables) {
    console.log({ input });

    const response = await updateAgencyLogo({ variables: { input } });
    return response.data;
  }

  return { updateAgencyLogoFetch, ...options };
};

import { useMutation } from "@apollo/client";
import { UpdateAgencyLogoPayload, UpdateAgencyLogoVariables, UPDATE_AGENCY_LOGO_M } from "src/graphql/gql/mutations";

export const useUpdateAgencyLogo = () => {
  const [updateAgencyLogo, { ...options }] = useMutation<UpdateAgencyLogoPayload, UpdateAgencyLogoVariables>(
    UPDATE_AGENCY_LOGO_M,
  );

  async function updateAgencyLogoFetch({ input }: UpdateAgencyLogoVariables) {
    const response = await updateAgencyLogo({ variables: { input } });
    return response.data;
  }

  return { updateAgencyLogoFetch, ...options };
};

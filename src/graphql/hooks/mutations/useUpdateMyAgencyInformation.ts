import { useMutation } from "@apollo/client";
import { UpdateMyAgencyInformationInput, UpdateMyAgencyInformationPayload } from "src/graphql/gql/mutations";
import { mutations } from "../../gql";

export const useUpdateMyAgencyInformation = () => {
  const [updateMyAgencyInformation, { ...options }] = useMutation<
    UpdateMyAgencyInformationPayload,
    UpdateMyAgencyInformationInput
  >(mutations.UPDATE_MY_AGENCY_INFORMATION);

  async function updateMyAgencyInformationFetch(variables: UpdateMyAgencyInformationInput) {
    const response = await updateMyAgencyInformation({ variables });

    return response;
  }

  return {
    updateMyAgencyInformationFetch,
    ...options,
  };
};

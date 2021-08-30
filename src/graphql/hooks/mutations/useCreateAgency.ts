import { useMutation } from "@apollo/client";
import { mutations } from "../../gql";

export const useCreateAgencyPayload = () => {
  const [createAgency, { ...options }] = useMutation<mutations.CreateAgencyPayload, mutations.CreateAgencyInput>(
    mutations.CREATE_AGENCY_M,
  );

  return { createAgency, ...options };
};

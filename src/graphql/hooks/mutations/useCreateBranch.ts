import { useMutation } from "@apollo/client";
import { mutations } from "../../gql";

export const useCreateBranch = () => {
  const [createBranch, { ...options }] = useMutation<mutations.CreateBranchPayload, mutations.CreateBranchInput>(
    mutations.CREATE_BRANCH_M,
  );

  return { createBranch, ...options };
};

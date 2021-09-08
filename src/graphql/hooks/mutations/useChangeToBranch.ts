import { useMutation } from "@apollo/client";
import { mutations } from "../../gql";

export const useChangeToBranch = () => {
  const [changeToBranch, { ...options }] = useMutation<
    mutations.ChangeToBranchPayload,
    mutations.ChangeToBranchVariables
  >(mutations.CHANGE_TO_BRANCH_M);

  return { changeToBranch, ...options };
};

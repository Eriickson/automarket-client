import { useMutation } from "@apollo/client";
import { DocumentNode } from "graphql";

export const useMutationCustom = <Payload, Variables>(mutation: DocumentNode) => {
  const [mutateFunctionFetch, options] = useMutation<Payload, Variables>(mutation);

  async function mutateFunction(variables?: Variables) {
    try {
      return mutateFunctionFetch({ variables });
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  return { mutateFunction, options };
};

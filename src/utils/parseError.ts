import { ApolloError } from "@apollo/client";

type ErrorPayload = {
  status: "error" | "success" | "warning";
  error: string;
  title: string;
  message: string;
  detail: string;
};

export function parseError(apolloError: ApolloError): ErrorPayload {
  if (!apolloError) {
    return {
      detail: "",
      error: "",
      message: "",
      status: "warning",
      title: "",
    };
  }
  const error = apolloError.graphQLErrors[0] as any;

  const errorPayload: ErrorPayload = error.errorPayload;

  return errorPayload;
}

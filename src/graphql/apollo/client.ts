import { ApolloClient, InMemoryCache, ApolloLink, NormalizedCacheObject } from "@apollo/client";
import errorLink from "./errorLink";
import uploadLink from "./uploadLink";
import authLink from "./authLink";
// import wsLink from "./wsLink";

interface IUseApolloClient {
  client: ApolloClient<NormalizedCacheObject>;
}

export const useApolloClient = (): IUseApolloClient => {
  const link = ApolloLink.from([authLink(), errorLink, uploadLink]);

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
    credentials: "include",
  });

  return { client };
};

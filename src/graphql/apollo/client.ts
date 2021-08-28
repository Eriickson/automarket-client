import { ApolloClient, InMemoryCache, ApolloLink, NormalizedCacheObject } from "@apollo/client";
import errorLink from "./errorLink";
import uploadLink from "./uploadLink";
import authLink from "./authLink";
import { refreshLink } from "./refreshLink";

interface IUseApolloClient {
  client: ApolloClient<NormalizedCacheObject>;
}

interface ApolloClientOptions {
  authorization: boolean;
}

export const getApolloClient = (options?: Partial<ApolloClientOptions>): IUseApolloClient => {
  const link = ApolloLink.from([authLink(), /*  refreshLink,  */ errorLink, uploadLink]);

  const client = new ApolloClient({
    cache: new InMemoryCache({
      addTypename: false,
    }),
    link,
    credentials: "include",
    headers: {
      ping: "pong",
    },
  });

  return { client };
};

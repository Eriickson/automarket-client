import { ApolloClient, InMemoryCache, ApolloLink } from "@apollo/client";
import errorLink from "src/graphql/apollo/errorLink";
import uploadLink from "src/graphql/apollo/uploadLink";

export const apolloClientCustom = new ApolloClient({
  uri: "http://localhost:7000/graphql",
  cache: new InMemoryCache({
    addTypename: false,
  }),
  link: ApolloLink.from([errorLink, uploadLink]),
});

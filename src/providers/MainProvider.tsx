import React, { FC } from "react";
import { UIProvider } from ".";

// Apollo
import { ApolloProvider } from "@apollo/client/react";
import { useApolloClient } from "@/graphql";

// Redux
import { Provider as ReduxProvider } from "react-redux";
import { useStore } from "@/store";

export const MainProvider: FC = ({ children }) => {
  const { client: apolloClient } = useApolloClient();
  const { store } = useStore();

  return (
    <ApolloProvider client={apolloClient}>
        <ReduxProvider store={store}>
          <UIProvider>{children}</UIProvider>
        </ReduxProvider>
    </ApolloProvider>
  );
};

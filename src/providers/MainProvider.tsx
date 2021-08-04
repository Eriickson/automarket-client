import React, { FC } from "react";
import { UIProvider } from ".";

// Apollo
import { ApolloProvider } from "@apollo/client/react";
import { getApolloClient } from "@/graphql";

// Redux
import { Provider as ReduxProvider } from "react-redux";
import { useStore } from "@/store";
import styled from "@emotion/styled";
import { AuthProvider } from "./AuthProvider";
import { ProvidersProps } from "@/shared";

const WrapperUIProviderStyled = styled.div`
  * {
    -webkit-tap-highlight-color: transparent;
  }
`;

export const MainProvider: FC<ProvidersProps> = ({ children, authProviderProps }) => {
  const { client: apolloClient } = getApolloClient();
  const { store } = useStore();

  return (
    <ApolloProvider client={apolloClient}>
      <ReduxProvider store={store}>
        <AuthProvider {...authProviderProps}>
          <WrapperUIProviderStyled>
            <UIProvider>{children}</UIProvider>
          </WrapperUIProviderStyled>
        </AuthProvider>
      </ReduxProvider>
    </ApolloProvider>
  );
};

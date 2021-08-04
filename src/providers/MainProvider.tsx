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
import { IAuth, ISession } from "@/shared";

const WrapperUIProviderStyled = styled.div`
  * {
    -webkit-tap-highlight-color: transparent;
  }
`;

interface MainProviderProps {
  isAuth: IAuth;
  session: ISession;
}

export const MainProvider: FC<MainProviderProps> = ({ children, ...props }) => {
  const { client: apolloClient } = getApolloClient();
  const { store } = useStore();

  return (
    <ApolloProvider client={apolloClient}>
      <ReduxProvider store={store}>
        <AuthProvider {...props}>
          <WrapperUIProviderStyled>
            <UIProvider>{children}</UIProvider>
          </WrapperUIProviderStyled>
        </AuthProvider>
      </ReduxProvider>
    </ApolloProvider>
  );
};

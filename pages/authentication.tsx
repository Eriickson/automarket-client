import React, { FC } from "react";

// NextJS
import { GetServerSideProps } from "next";

// Packages
import { signOut } from "next-auth/client";
import { Button } from "@chakra-ui/react";

// My Elements
import { getAuthSsr } from "@/auth";
import { ProvidersProps } from "@/shared";

const Authentication: FC<AuthenticationProps> = () => {
  return (
    <div>
      Authentication
      <Button colorScheme="danger" onClick={() => signOut()}>
        Cerrar sesión
      </Button>
    </div>
  );
};

/* eslint-disable @typescript-eslint/no-empty-interface */
interface AuthenticationProps extends ProvidersProps {}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const response = await getAuthSsr({ ctx });

  const props: AuthenticationProps = {
    authProviderProps: { isAuth: response.isAuth },
  };

  if (response.session) {
    props.authProviderProps.session = response.session;
  }

  return { props };
};

export default Authentication;

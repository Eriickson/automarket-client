import React, { FC } from "react";
import axios from "axios";

// Packages
import { Button } from "@chakra-ui/react";
import { GetServerSideProps, ProvidersProps } from "@/shared";
import { getAuth } from "@/auth";
import gql from "graphql-tag";
import { useLazyQuery } from "@apollo/client";
import { AuthProviderProps } from "@/providers";
import router from "next/router";

const SHOW_PRIVATE_STUFF = gql`
  query ShowPrivateStuff {
    showPrivateStuff
  }
`;

const Authentication: FC<AuthenticationPageProps> = () => {
  const [showPrivateStuff] = useLazyQuery(SHOW_PRIVATE_STUFF);

  async function logoutUser() {
    await axios.post("/api/auth/logout");
    router.reload();
  }

  return (
    <div>
      <Button colorScheme="info" onClick={() => showPrivateStuff()}>
        Get Info
      </Button>
      <Button colorScheme="danger" onClick={logoutUser}>
        Cerrar sesión
      </Button>
    </div>
  );
};

/* eslint-disable @typescript-eslint/no-empty-interface */
interface AuthenticationPageProps extends ProvidersProps {}

export const getServerSideProps: GetServerSideProps<AuthenticationPageProps> = async ctx => {
  const auth = await getAuth({ ctx });

  const props: AuthenticationPageProps = {
    authProviderProps: auth,
    seo: {
      title: "Este es el título",
      desc: "Esta es la descripción",
    },
  };
  return { props };
};

export default Authentication;

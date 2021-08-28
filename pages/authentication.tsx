import React, { useEffect, FC } from "react";
import axios from "axios";
// import { GetServerSideProps, withSession } from "@automarket-rd/server";

// Packages
import { Button } from "@chakra-ui/react";
import { GetServerSideProps } from "@/shared";
import { getAuth } from "@/auth";
import gql from "graphql-tag";
import { useLazyQuery } from "@apollo/client";
import { AuthProviderProps } from "@/providers";

const SHOW_PRIVATE_STUFF = gql`
  query ShowPrivateStuff {
    showPrivateStuff
  }
`;

const Authentication: FC<AuthenticationPageProps> = props => {
  const [showPrivateStuff, { data }] = useLazyQuery(SHOW_PRIVATE_STUFF);

  useEffect(() => {
    if (data) console.log(data);
    console.log(props);
  }, [data]);

  async function logoutUser() {
    const response = await axios.post("/api/auth/logout");
    console.log(response);
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
interface AuthenticationPageProps extends AuthProviderProps {}

export const getServerSideProps: GetServerSideProps<AuthenticationPageProps> = async ctx => {
  await getAuth({ ctx });

  const props: AuthenticationPageProps = {
    accessToken: "accessToken",
    refreshToken: "refreshToken",
    isAuth: true,
  };
  return { props };
};

export default Authentication;

import React, { FC } from "react";
// import { GetServerSideProps, withSession } from "@automarket-rd/server";

// Packages
import { Button } from "@chakra-ui/react";
import { GetServerSideProps } from "@/shared";
import { getAuth } from "@/auth";

const Authentication: FC<AuthenticationPageProps> = () => {
  return (
    <div>
      <Button colorScheme="danger">Cerrar sesión</Button>
    </div>
  );
};

/* eslint-disable @typescript-eslint/no-empty-interface */
interface AuthenticationPageProps {
  ping: string;
}

export const getServerSideProps: GetServerSideProps<AuthenticationPageProps> = async ctx => {
  await getAuth(ctx);

  const props: AuthenticationPageProps = {
    ping: "Poing",
  };
  return { props };
};

export default Authentication;

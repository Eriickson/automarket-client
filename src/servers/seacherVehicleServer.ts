import { getAuthSsr } from "@/auth";
import { ProvidersProps } from "@/shared";
import { GetServerSideProps } from "next";

/* eslint-disable @typescript-eslint/no-empty-interface */
interface SeacherVehicleProps extends ProvidersProps {}

export const seacherVehicleServerSide: GetServerSideProps = async ctx => {
  const auth = await getAuthSsr({ ctx });

  const props: SeacherVehicleProps = {
    authProviderProps: { ...auth },
  };

  return { props };
};

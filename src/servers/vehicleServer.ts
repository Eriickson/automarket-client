import { getAuthSsr } from "@/auth";
import { ProvidersProps } from "@/shared";
import { GetServerSideProps } from "next";

/* eslint-disable @typescript-eslint/no-empty-interface */
interface VehicleProps extends ProvidersProps {}

export const vehicleServerSide: GetServerSideProps = async ctx => {
  const auth = await getAuthSsr({ ctx });

  const props: VehicleProps = {
    authProviderProps: { ...auth },
  };

  return { props };
};

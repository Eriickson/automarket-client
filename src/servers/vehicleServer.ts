import { ProvidersProps } from "@/shared";
import { GetServerSideProps } from "next";

/* eslint-disable @typescript-eslint/no-empty-interface */
interface VehicleProps {}

export const vehicleServerSide: GetServerSideProps = async ctx => {
  const props: VehicleProps = {};

  return { props };
};

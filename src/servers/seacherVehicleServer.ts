import { ProvidersProps } from "@/shared";
import { GetServerSideProps } from "next";

/* eslint-disable @typescript-eslint/no-empty-interface */
interface SeacherVehicleProps {}

export const seacherVehicleServerSide: GetServerSideProps = async ctx => {
  const props: SeacherVehicleProps = {};

  return { props };
};

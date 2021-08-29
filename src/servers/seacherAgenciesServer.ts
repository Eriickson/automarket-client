import { ProvidersProps } from "@/shared";
import { GetServerSideProps } from "next";

/* eslint-disable @typescript-eslint/no-empty-interface */
interface SeacherAgenciesProps {}

export const seacherAgenciesServerSide: GetServerSideProps = async ctx => {
  const props: SeacherAgenciesProps = {};

  return { props };
};

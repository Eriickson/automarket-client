import { NextPage } from "next";
import React from "react";
import { NewAgencyTemplate } from "@/templates";

const NewAgency: NextPage = () => {
  return <NewAgencyTemplate />;
};

export { newAgencyServerSide as getServerSideProps } from "@/servers";
export default NewAgency;

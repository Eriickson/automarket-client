import { MeAgencyTemplate } from "@/templates";
import { NextPage } from "next";
import React from "react";
import { MeAgencyProps } from "@/servers";
import { useAction } from "@/store";

const MeAgency: NextPage<MeAgencyProps> = ({ myAgency }) => {
  const { setMyAgency } = useAction();
  setMyAgency(myAgency);

  return (
    <div>
      <MeAgencyTemplate />
    </div>
  );
};

export { meAgencyServerSide as getServerSideProps } from "@/servers";
export default MeAgency;

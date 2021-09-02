import { MeAgencyTemplate } from "@/templates";
import { NextPage } from "next";
import React from "react";
import { MeAgencyProps } from "@/servers";

const MeAgency: NextPage<MeAgencyProps> = ({ agency }) => {
  return (
    <div>
      <MeAgencyTemplate />
    </div>
  );
};

// export { meAgencyServerSide as getServerSideProps } from "@/servers";
export default MeAgency;

import React from "react";
import { NextPage } from "next";

import { PlanNameTemplate } from "@/templates";
import { PlanNamePageProps } from "@/servers";

const PlanNamePage: NextPage<PlanNamePageProps> = () => {
  return (
    <div>
      <PlanNameTemplate />
    </div>
  );
};

export { planNameServerSide as getServerSideProps } from "@/servers";
export default PlanNamePage;

import React, { FC } from "react";

import { SeacherAgenciesTemplate } from "@/templates";

const SeacherAgenciesPage: FC = () => {
  return <SeacherAgenciesTemplate />;
};

export { seacherAgenciesServerSide as getServerSideProps } from "@/servers";
export default SeacherAgenciesPage;

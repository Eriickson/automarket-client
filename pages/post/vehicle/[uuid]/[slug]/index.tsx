import React from "react";
import { NextPage } from "next";

import { PostTemplate } from "@/templates";

const VehiclePage: NextPage = () => {
  return <PostTemplate />;
};

// export { vehiclePostServerSide as getServerSideProps } from "@/servers";
export default VehiclePage;

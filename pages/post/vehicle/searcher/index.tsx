import React, { FC } from "react";
import { SearcherVehicleTemplate } from "@/templates";

const SearcherVehicle: FC = () => {
  return (
    <div>
      <SearcherVehicleTemplate />
    </div>
  );
};

export { seacherVehicleServerSide as getServerSideProps } from "@/servers";
export default SearcherVehicle;

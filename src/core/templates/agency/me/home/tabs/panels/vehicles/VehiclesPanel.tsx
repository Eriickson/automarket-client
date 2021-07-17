import { PrimaryCard } from "@/components";
import React, { FC } from "react";
import { VehiclesTable } from "./VehiclesTable";

export const VehiclesPanel: FC = () => {
  return (
    <PrimaryCard>
      <VehiclesTable />
    </PrimaryCard>
  );
};

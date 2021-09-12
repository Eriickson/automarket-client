import React from "react";
import { NextPage } from "next";
import { NewVehicleTemplate } from "@/templates";
import { NewVehicleProps } from "@/servers";
import { useAction } from "@/store";

const NewVehiclePage: NextPage<NewVehicleProps> = ({ information, branches }) => {
  const { setNewVehicleInitialState } = useAction();
  setNewVehicleInitialState({ ...information, branches });

  return (
    <div>
      <NewVehicleTemplate />
    </div>
  );
};

export { newVehicleServerSide as getServerSideProps } from "@/servers";
export default NewVehiclePage;

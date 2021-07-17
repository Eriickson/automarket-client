import React from "react";
import { NextPage } from "next";
import { NewVehicleTemplate } from "@/templates";
import { NewVehicleProps } from "@/servers";
import { useAction } from "@/store";

const NewVehiclePage: NextPage<NewVehicleProps> = ({ information }) => {
  const { setNewVehicleInitialState } = useAction();
  setNewVehicleInitialState({ information });

  return (
    <div>
      <NewVehicleTemplate />
    </div>
  );
};

export { newVehicleServerSide as getServerSideProps } from "@/servers";
export default NewVehiclePage;

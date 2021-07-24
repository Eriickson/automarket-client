import React, { useEffect } from "react";
import { NextPage } from "next";
import { NewVehicleTemplate } from "@/templates";
import { NewVehicleProps } from "@/servers";
import { useAction } from "@/store";
import { useUIContext } from "@/context";

const NewVehiclePage: NextPage<NewVehicleProps> = ({ information }) => {
  const { setNewVehicleInitialState } = useAction();
  setNewVehicleInitialState(information);
  const { breadcrumb } = useUIContext();

  useEffect(() => {
    breadcrumb.setItems([
      { label: "Publicaciones", href: "/" },
      { label: "Vehículos", href: "/" },
      { label: "Nuevo", href: "/", isCurrentPage: true },
    ]);
  }, []);

  return (
    <div>
      <NewVehicleTemplate />
    </div>
  );
};

export { newVehicleServerSide as getServerSideProps } from "@/servers";
export default NewVehiclePage;

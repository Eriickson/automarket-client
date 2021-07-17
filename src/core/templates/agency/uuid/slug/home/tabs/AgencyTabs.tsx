import React, { useState, lazy } from "react";

export const AgencyTabs = () => {
  const [tabs, setTabs] = useState([
    {
      title: "Vehículos",
      Component: lazy(() => import("./panels/contacts/ContactsPanel")),
    },
  ]);

  return <div></div>;
};

import React, { FC } from "react";
import { MainLayout } from "@/layouts";
import { Wizard } from "@/components";
import { DataAgencyStep } from "./steps/DataAgencyStep";

export const NewAgencyTemplate: FC = () => {
  return (
    <MainLayout>
      <Wizard
        steps={[
          {
            title: "titulo aquí",
            Component: <DataAgencyStep />,
            nameForm: "name",
          },
          {
            title: "titulo aquí",
            Component: <DataAgencyStep />,
            nameForm: "name",
          },
          {
            title: "titulo aquí",
            Component: <DataAgencyStep />,
            nameForm: "name",
          },
        ]}
        currentStep={1}
        onPrevStep={() => {}}
      />
    </MainLayout>
  );
};

import { PrimaryCard } from "@/components";
import { Box } from "@chakra-ui/react";
import React, { FC } from "react";
import { ActionsBottom } from "./ActionsBottom";

import { UbicationPanelForm } from "./UbicationPanelForm";

export const UbicationPanel: FC = () => {
  return (
    <>
      <Box mb="3">
        <PrimaryCard>
          <UbicationPanelForm
            onSubmit={values => {
              console.log(values);
            }}
          />
        </PrimaryCard>
      </Box>
      <ActionsBottom />
    </>
  );
};

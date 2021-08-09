import React, { FC } from "react";

// Packages
import { Heading } from "@chakra-ui/react";

// My Components
import { PrimaryCard } from "@/components";
import { SeacherForm } from "./SeacherForm";

export const Searcher: FC = () => {
  function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <PrimaryCard>
      <Heading color="sec.500" fontSize="xl" mb="3">
        Buscar Vehículo
      </Heading>
      <SeacherForm onSubmit={onSubmit} />
    </PrimaryCard>
  );
};

import React, { FC } from "react";

// NextJS
import Router from "next/router";

// Packages
import { Heading } from "@chakra-ui/react";
import queryString from "query-string";

// My Components
import { PrimaryCard } from "@/components";
import { SeacherForm } from "./SeacherForm";

export const Searcher: FC = () => {
  function onSubmit(values: any) {
    const query = queryString.stringify({
      brand: values.brand?.label.toLowerCase().replace(/ /, "-"),
      model: values.model?.label.toLowerCase().replace(/ /, "-"),
      minYear: values.minYear?.label,
      maxYear: values.maxYear?.label,
    });

    Router.push({ pathname: "/post/vehicle/searcher", query });
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

import { InputControl } from "@/components";
import { VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { SelectAgencyLogo } from "./SelectAgencyLogo";

export const EditAgencyInformationForm: FC = () => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <VStack alignItems="stretch">
        <SelectAgencyLogo />
        <InputControl isRequired label="Nombre de la agencía" name="name" />
        <InputControl isRequired label="Slogan" name="slogan" />
      </VStack>
    </FormProvider>
  );
};

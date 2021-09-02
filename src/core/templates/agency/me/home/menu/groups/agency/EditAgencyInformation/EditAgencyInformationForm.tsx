import { InputControl } from "@/components";
import { useSelector } from "@/store";
import { EditAgencyInformationFormResolver, EditAgencyInformationFormType } from "@/validations";
import { VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
// import { SelectAgencyLogo } from "./SelectAgencyLogo";

export interface EditAgencyInformationFormProps {
  onSubmit(values: EditAgencyInformationFormType): void;
}

export const EditAgencyInformationForm: FC<EditAgencyInformationFormProps> = ({ onSubmit }) => {
  const methods = useForm({ resolver: EditAgencyInformationFormResolver });
  const { name, slogan } = useSelector(store => store.agency.myAgency);

  return (
    <FormProvider {...methods}>
      <form id="edit-agency-information-form" onSubmit={methods.handleSubmit(onSubmit)}>
        <VStack alignItems="stretch">
          {/* <SelectAgencyLogo /> */}
          <InputControl isRequired defaultValue={name} label="Nombre de la agencía" name="name" />
          <InputControl isRequired defaultValue={slogan} label="Slogan" name="slogan" />
        </VStack>
      </form>
    </FormProvider>
  );
};

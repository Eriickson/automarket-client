import React, { FC } from "react";

// Packages
import { VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

// My Elements
import { useSelector } from "@/store";

// My Components
import { FormWizardProvider, InputControl, RadioGroup } from "@/components";

import { NewAgencyDataResolver, INewAgencyDataFormOnSubmit } from "@/validations";
import { SelectAgencyLogo } from "./SelectAgencyLogo";

interface NewAgencyDataFormProps {
  onSubmit(values: INewAgencyDataFormOnSubmit): void;
}

export const NewAgencyDataForm: FC<NewAgencyDataFormProps> = ({ onSubmit }) => {
  const { agencyData } = useSelector(({ agency }) => agency.new);
  const methods = useForm({
    resolver: NewAgencyDataResolver,
  });

  return (
    <FormWizardProvider methods={methods} onSubmit={onSubmit}>
      <VStack alignItems="stretch" maxW="2xl" mx="auto">
        <SelectAgencyLogo />
        <InputControl isRequired defaultValue={agencyData?.name} label="Nombre de la agencía" name="name" />
        <InputControl isRequired defaultValue={agencyData?.slogan} label="Eslogan" name="slogan" />
        <RadioGroup
          isRequired
          defaultValue={agencyData?.isProfessional ? agencyData?.isProfessional : true}
          label="Tipo de agencia"
          name="isProfessional"
          radioItems={[
            { label: "Profesional", value: true },
            { label: "Personal", value: false },
          ]}
        />
        {/* <RadioGroup
          isRequired
          label="Ocupación"
          name="occupation"
          defaultValue="dealer"
          radioItems={[
            { label: "Dealer", value: "dealer" },
            { label: "Rent a Car", value: "rentACar" },
          ]}
        /> */}
      </VStack>
    </FormWizardProvider>
  );
};

import React, { FC } from "react";
import { useForm } from "react-hook-form";

import { Box } from "@chakra-ui/react";

import { useSelector } from "@/store";

import {
  FormWizardProvider,
  InputControl,
  RadioGroup,
  SelectProfileImageProvider,
  SelectProfileImage,
  LabelInput,
} from "@/components";

import { NewAgencyDataResolver, INewAgencyDataFormOnSubmit } from "@/validations";

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
      <Box maxW="lg" mx="auto">
        <Box mb={3}>
          <SelectProfileImageProvider>
            <LabelInput isRequired label="Logo de la agencia" />
            <SelectProfileImage
              aspectRatio={4 / 3}
              showAvatar
              onChange={value => {
                console.log(value);
              }}
            />
          </SelectProfileImageProvider>
        </Box>
        <InputControl isRequired label="Nombre de la agencía" name="name" defaultValue={agencyData?.name} />
        <InputControl isRequired label="Eslogan" name="slogan" defaultValue={agencyData?.slogan} />
        <RadioGroup
          isRequired
          label="Tipo de agencia"
          name="isProfessional"
          defaultValue={agencyData?.isProfessional ? agencyData?.isProfessional : true}
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
      </Box>
    </FormWizardProvider>
  );
};

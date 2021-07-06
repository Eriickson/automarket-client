import React, { FC } from "react";
import { useForm } from "react-hook-form";

import { Box } from "@chakra-ui/react";

import {
  FormWizardProvider,
  InputControl,
  RadioGroup,
  SelectProfileImageProvider,
  SelectProfileImage,
  LabelInput,
} from "@/components";

interface NewAgencyDataFormProps {
  onSubmit(values: any): void;
}

export const NewAgencyDataForm: FC<NewAgencyDataFormProps> = ({ onSubmit }) => {
  const methods = useForm();

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
        <InputControl isRequired label="Nombre de la agencía" name="name" />
        <InputControl isRequired label="Eslogan" name="slogan" />
        <RadioGroup
          isRequired
          label="Tipo de agencia"
          name="isProfesional"
          defaultValue="professional"
          radioItems={[
            { label: "Profesional", value: "professional" },
            { label: "Personal", value: "personal" },
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

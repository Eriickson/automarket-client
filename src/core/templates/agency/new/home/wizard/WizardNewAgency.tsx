import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Wizard, IWizardStep } from "@/components";
import { NewAgencyDataStep, UbicationStep, ContactsStep, VerifyStep } from "./steps";
import { IconFileText, IconMapPin, IconPhoneCall, IconShieldCheck } from "@tabler/icons";

export const WizardNewAgency = () => {
  const [stepList] = useState<IWizardStep[]>([
    {
      label: "Datos",
      nameForm: "agency-data",
      desc: "Agrega los datos principales que identifiquen y que hagan única a tu agencia entre las demás.",
      title: "Datos de la agencia",
      Icon: <IconFileText />,
      Component: <NewAgencyDataStep />,
    },
    {
      label: "Ubicación",
      nameForm: "agency-data",
      desc: "Agrega la direcciónde tu agencía para que sea más fácil de encontrar.",
      title: "Ubica tu agencia",
      Icon: <IconMapPin />,
      Component: <UbicationStep />,
    },
    {
      label: "Contactos",
      nameForm: "agency-data",
      desc: "Agrega las diferentes vías en que un cliente se puede comunicar con el personal de la agencia.",
      title: "Vías de comunicación",
      Icon: <IconPhoneCall />,
      Component: <ContactsStep />,
    },
    {
      label: "Verificar",
      nameForm: "agency-data",
      desc: "Para finalizar, revisa que los datos agregados en los pasos anteriores estén correctos.",
      title: "Verificar información",
      Icon: <IconShieldCheck />,
      Component: <VerifyStep />,
    },
  ]);

  return (
    <Box>
      <Wizard stepList={stepList} />
    </Box>
  );
};

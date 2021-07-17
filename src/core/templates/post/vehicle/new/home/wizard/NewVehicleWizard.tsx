import { IWizardStep, Wizard } from "@/components";
import { Box } from "@chakra-ui/react";
import { IconAlignLeft, IconClipboardCheck, IconListCheck, IconPhoto, IconReport } from "@tabler/icons";
import React, { FC, useState } from "react";
import * as Step from "./steps";

export const NewVehicleWizard: FC = () => {
  const [stepList] = useState<IWizardStep[]>([
    {
      label: "Información",
      nameForm: "information-step",
      desc: "",
      title: "Describe tu vehículo",
      Icon: <IconReport />,
      Component: <Step.InformationStep />,
    },
    {
      label: "Listados",
      nameForm: "listing-step",
      desc: "",
      title: "Describe tu vehículo",
      Icon: <IconListCheck />,
      Component: <Step.ListingStep />,
    },
    {
      label: "Publicación",
      nameForm: "publication-step",
      desc: "",
      title: "Describe tu vehículo",
      Icon: <IconAlignLeft />,
      Component: <Step.PublicationStep />,
    },
    {
      label: "Imágenes",
      nameForm: "image-step",
      desc: "",
      title: "Describe tu vehículo",
      Icon: <IconPhoto />,
      Component: <Step.ImagesStep />,
    },
    {
      label: "Verificar",
      nameForm: "verify-step",
      desc: "",
      title: "Describe tu vehículo",
      Icon: <IconClipboardCheck />,
      Component: <Step.ImagesStep />,
    },
  ]);

  return (
    <Box>
      <Wizard stepList={stepList} />
    </Box>
  );
};

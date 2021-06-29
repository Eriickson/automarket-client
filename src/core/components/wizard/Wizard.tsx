import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import {
  IconClipboardCheck,
  IconClipboardList,
  IconListCheck,
  IconPhone,
  IconPhoto,
  IconShieldCheck,
} from "@tabler/icons";
import { StepIndicatorSm } from "./StepIndicatorSm";
import { StepIndicator } from "./StepIndicator";
import { WizardAction } from "./WizardAction";
import { useWizard } from "./WizardContext";
import { StepExample } from "./StepExample";
import { ContainerWizard } from "./ContainerWizard";

export const Wizard = () => {
  const { addStepList } = useWizard();

  useEffect(() => {
    addStepList([
      {
        label: "Datos",
        desc: "Esta es una pequeña descripción 1",
        nameForm: "example",
        title: "Titulo principal 1",
        Component: <StepExample />,
        Icon: <IconClipboardList />,
      },
      {
        label: "Imágenes",
        desc: "Esta es una pequeña descripción 2",
        nameForm: "example",
        title: "Titulo principal 2",
        Component: <StepExample />,
        Icon: <IconPhoto />,
      },
      {
        label: "Listados",
        desc: "Esta es una pequeña descripción 3",
        nameForm: "example",
        title: "Titulo principal 3",
        Component: <StepExample />,
        Icon: <IconListCheck />,
      },
      {
        label: "Verificar",
        desc: "Esta es una pequeña descripción 3",
        nameForm: "example",
        title: "Titulo principal 3",
        Component: <StepExample />,
        Icon: <IconShieldCheck />,
      },
    ]);
  }, []);

  return (
    <div>
      <Box mb="8">
        <Box display={["none", null, "block"]}>
          <StepIndicator />
        </Box>
        <Box display={[null, null, "none"]}>
          <StepIndicatorSm />
        </Box>
      </Box>
      <ContainerWizard />
      <WizardAction />
    </div>
  );
};

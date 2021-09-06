import React, { FC } from "react";
import { useWizard } from "./WizardContext";
import { chakra, Box, Heading, Text, IconButton } from "@chakra-ui/react";

export const StepIndicatorSm: FC = () => {
  const { currentStep, stepList } = useWizard();

  return (
    <Box>
      <Box alignItems="center" display="flex" mb="3">
        <IconButton
          aria-label="example"
          borderWidth="2px"
          colorScheme="pri"
          icon={stepList[currentStep]?.Icon}
          mr="3"
          p="1"
          rounded="full"
          size="lg"
        />
        <Box>
          <Text color="gray.500" display="flex" fontSize="sm" fontWeight="semibold" lineHeight="normal">
            <chakra.span color="pri.600" mr="1">
              Paso {currentStep + 1}
            </chakra.span>
            / {stepList.length}
          </Text>
          <Heading fontSize="lg" fontWeight="800">
            {stepList[currentStep]?.label}
          </Heading>
        </Box>
      </Box>
      <Box display="flex">
        <Box
          borderColor="pri.600"
          borderTopWidth="3px"
          height="0"
          opacity="1"
          transition="200ms"
          w={`${((currentStep + 1) * 100) / stepList.length}%`}
        />
        {stepList.length - 1 > currentStep && <Box borderColor="gray.200" borderTopWidth="3px" flex="1" height="0" />}
      </Box>
    </Box>
  );
};

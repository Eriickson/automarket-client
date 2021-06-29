import React from "react";
import { useWizard } from "./WizardContext";
import { Box, Heading, Text, IconButton, Divider } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export const StepIndicatorSm = () => {
  const { currentStep, stepList } = useWizard();

  return (
    <Box>
      <Box display="flex" alignItems="center" mb="3">
        <IconButton
          aria-label="example"
          p="1"
          icon={stepList[currentStep]?.Icon}
          rounded="full"
          size="lg"
          colorScheme="pri"
          borderWidth="2px"
          mr="3"
        />
        <Box>
          <Text lineHeight="normal" display="flex" fontSize="sm" color="gray.500" fontWeight="semibold">
            <Text color="pri.600" mr="1">
              Paso {currentStep + 1}
            </Text>
            / {stepList.length}
          </Text>
          <Heading fontSize="lg" fontWeight="800">
            {stepList[currentStep]?.label}
          </Heading>
        </Box>
      </Box>
      <Box display="flex">
        <Box
          height="0"
          opacity="1"
          borderTopWidth="3px"
          borderColor="pri.600"
          transition="200ms"
          w={`${((currentStep + 1) * 100) / stepList.length}%`}
          // style={{
          //   border: "2px solid green",
          //   width: "10%",
          // }}
        />
        {stepList.length - 1 > currentStep && <Box height="0" borderTopWidth="3px" borderColor="gray.200" flex="1" />}
      </Box>
    </Box>
  );
};

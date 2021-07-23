import React, { FC, Fragment } from "react";

// Packages
import { Box, Text, IconButton } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

// My Components
import { useWizard } from "./WizardContext";

export const StepIndicator: FC = () => {
  const { currentStep, stepList } = useWizard();

  return (
    <Box alignItems="center" display="flex" justifyContent="space-between">
      {stepList.map((item, i) => {
        return (
          <Fragment key={i}>
            {i !== 0 && (
              <>
                <Box
                  borderColor={i === currentStep + 1 ? "pri.500" : currentStep + 1 > i ? "success.500" : "gray.200"}
                  borderWidth="1px"
                  flex="1"
                  opacity="1"
                />
                <Box
                  borderColor={i < currentStep + 1 ? "success.500" : "gray.200"}
                  borderWidth="1px"
                  flex="1"
                  opacity="1"
                />
              </>
            )}
            <Box mx="2" position="relative">
              <IconButton
                aria-label="example"
                borderWidth="2px"
                colorScheme={currentStep > i ? "success" : currentStep === i ? "pri" : "gray"}
                icon={
                  <>
                    {currentStep > i ? (
                      <CheckIcon />
                    ) : (
                      <Box color={currentStep === i ? "white" : "gray.400"}>{item.Icon}</Box>
                    )}
                  </>
                }
                p="1"
                rounded="full"
                size="lg"
                variant={currentStep >= i ? "solid" : "outline"}
              />
              <Text
                display={["none", null, null, "block"]}
                fontWeight="semibold"
                left={stepList.length - 1 !== i ? "0" : ""}
                position="absolute"
                right="0"
                w="max-content"
              >
                {item.label}
              </Text>
            </Box>
          </Fragment>
        );
      })}
    </Box>
  );
};

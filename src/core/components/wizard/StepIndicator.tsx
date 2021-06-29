import React, { Fragment } from "react";
import { Box, Button, Text, IconButton, Divider } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useWizard } from "./WizardContext";

export const StepIndicator = () => {
  const { currentStep, stepList } = useWizard();

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      {stepList.map((item, i) => {
        return (
          <Fragment key={i}>
            {i !== 0 && (
              <>
                <Box
                  flex="1"
                  opacity="1"
                  borderWidth="1px"
                  borderColor={i === currentStep + 1 ? "pri.500" : currentStep + 1 > i ? "success.500" : "gray.200"}
                />
                <Box
                  flex="1"
                  opacity="1"
                  borderWidth="1px"
                  borderColor={i < currentStep + 1 ? "success.500" : "gray.200"}
                />
              </>
            )}
            <Box mx="2" position="relative">
              <IconButton
                aria-label="example"
                p="1"
                icon={
                  <>
                    {currentStep > i ? (
                      <CheckIcon />
                    ) : (
                      <Box color={currentStep === i ? "white" : "gray.400"}>{item.Icon}</Box>
                    )}
                  </>
                }
                rounded="full"
                size="lg"
                colorScheme={currentStep > i ? "success" : currentStep === i ? "pri" : "gray"}
                variant={currentStep >= i ? "solid" : "outline"}
                borderWidth="2px"
              />
              <Text
                display={["none", null, null, "block"]}
                w="max-content"
                fontWeight="semibold"
                position="absolute"
                right="0"
                left={stepList.length - 1 !== i ? "0" : ""}
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

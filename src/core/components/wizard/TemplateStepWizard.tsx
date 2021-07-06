import React from "react";
import { Box, Text, Heading, Divider } from "@chakra-ui/react";
import { Fade, ScaleFade, Slide, SlideFade } from "@chakra-ui/react";

// Styles and Icons
import { motion } from "framer-motion";

// My Components
import { PrimaryCard } from "..";
import { FormWizardProvider } from "./FormWizardProvider";

// Types and Interfaces
export interface TemplateStepWizardProps {
  title: string;
  desc: string;
}

export const TemplateStepWizard: React.FC<TemplateStepWizardProps> = ({ children, title, desc }) => {
  return (
    <>
      <PrimaryCard>
        <Box
          display="flex"
          flexDirection="column"
          mb="3"
          alignItems={[null, null, "center"]}
          className="flex flex-col mb-3 md:items-center"
        >
          <Heading size="md" mb="1" textColor="pri.500" className="mb-1 text-xl font-semibold text-pri-500">
            {title}
          </Heading>
          <Box display="flex" w="full" alignItems="center" justifyContent="center">
            <Divider display={["none", null, null, "block"]} flex="1" h="0" />
            <Text mr="3" fontSize="sm" mx={[null, null, "3"]}>
              {desc}
            </Text>
            <Divider
              // display={["none", null, null, "block"]}
              flex="1"
              h="0"
            />
          </Box>
        </Box>
        <>{children}</>
      </PrimaryCard>
    </>
  );
};

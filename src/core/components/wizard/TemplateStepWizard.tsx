import React from "react";
import { Box, Text, Heading, Divider } from "@chakra-ui/react";

// My Components
import { PrimaryCard } from "..";

export interface TemplateStepWizardProps {
  title: string;
  desc: string;
}

export const TemplateStepWizard: React.FC<TemplateStepWizardProps> = ({ children, title, desc }) => {
  return (
    <>
      <PrimaryCard>
        <Box
          alignItems={[null, null, "center"]}
          className="flex flex-col mb-3 md:items-center"
          display="flex"
          flexDirection="column"
          mb="3"
        >
          <Heading className="mb-1 text-xl font-semibold text-pri-500" mb="1" size="md" textColor="pri.500">
            {title}
          </Heading>
          <Box alignItems="center" display="flex" justifyContent="center" w="full">
            <Divider display={["none", null, null, "block"]} flex="1" h="0" />
            <Text fontSize="sm" mr="3" mx={[null, null, "3"]}>
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

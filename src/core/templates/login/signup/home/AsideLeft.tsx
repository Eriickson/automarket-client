import React, { FC } from "react";

import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons";

export const AsideLeft: FC = () => {
  return (
    <Box bgColor="pri.600" display={["none", null, "block"]} w={[null, null, "xs", "sm", "md", null, "2xl"]}>
      <Box p={4}>
        <Box w="max-content">
          <Link href="/">
            <a>
              <Text
                _hover={{
                  color: "pri.300",
                }}
                alignItems="center"
                color="white"
                display="flex"
                fontSize="lg"
                fontWeight="semibold"
                px="3"
                transition="150ms"
              >
                <IconArrowLeft /> Volver a Inicio
              </Text>
            </a>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

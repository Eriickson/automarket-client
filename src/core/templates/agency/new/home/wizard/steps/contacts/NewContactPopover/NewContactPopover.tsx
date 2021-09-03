import { Button, Popover, PopoverTrigger, PopoverContent, PopoverBody, PopoverArrow, HStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { NewEmailModal } from "./newEmailModal/NewEmailModal";
import { NewPhoneNumbers } from "./newPhoneNumbers/NewPhoneNumbers";

export const NewContactPopover: FC = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button mt="3" w="full">
          Nuevo Contacto
        </Button>
      </PopoverTrigger>
      <>
        <PopoverContent _focus={{ shadow: "none" }}>
          <PopoverArrow />
          <PopoverBody px="2">
            <HStack>
              <NewEmailModal />
              <NewPhoneNumbers />
            </HStack>
          </PopoverBody>
        </PopoverContent>
      </>
    </Popover>
  );
};

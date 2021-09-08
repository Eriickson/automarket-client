import React, { FC } from "react";

// Packages
import { Popover, PopoverTrigger, PopoverContent, PopoverBody, PopoverArrow, HStack } from "@chakra-ui/react";

// My Components
import { NewEmailModal } from "./newEmailModal/NewEmailModal";
import { NewPhoneNumbers } from "./newPhoneNumbers/NewPhoneNumbers";
import { Contact } from "@/shared";

interface AddContactsProps {
  getNewEmail(newEmail: Contact): void;
  getNewPhoneNumber(newPhoneNumber: Contact): void;
}

export const AddContacts: FC<AddContactsProps> = ({ getNewPhoneNumber, getNewEmail, children }) => {
  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent _focus={{ shadow: "none" }}>
        <PopoverArrow />
        <PopoverBody px="2">
          <HStack>
            <NewPhoneNumbers getNewPhoneNumber={getNewPhoneNumber} />
            <NewEmailModal getNewEmail={getNewEmail} />
          </HStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

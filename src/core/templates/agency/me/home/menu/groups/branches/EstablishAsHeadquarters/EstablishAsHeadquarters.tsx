import React, { useState, FC } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  MenuItem,
  useDisclosure,
  Button,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Divider,
  Radio,
  RadioGroup,
  Flex,
  Box,
} from "@chakra-ui/react";
import { IconBuildingStore, IconMapPin, IconStar } from "@tabler/icons";
import { useSelector } from "@/store";

export const EstablishAsHeadquarters: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { branches, selectedBranch } = useSelector(({ agency }) => agency.myAgency);

  const [value, setValue] = useState("1");

  return (
    <>
      <MenuItem py="1.5" onClick={onOpen}>
        <Box
          alignItems="center"
          bgColor="pri.100"
          color="pri.500"
          display="flex"
          h="6"
          justifyContent="center"
          mr="1.5"
          w="6"
        >
          <IconBuildingStore size="1.25rem" strokeWidth={1.5} />
        </Box>
        Cambiar la sede
      </MenuItem>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="sm">
          <ModalHeader>
            <Text>Establecer como Sede</Text>
            <Text color="gray.400" fontSize="sm" fontWeight="normal" lineHeight="normal" pr="6">
              Selecciona una sucursal para ser la nueva sede
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RadioGroup value={value} onChange={setValue}>
              <List>
                {branches.map((branch, i) => {
                  const { municipality, province, reference, sector } = branch.ubication.direction;
                  return (
                    <>
                      <ListItem key={i}>
                        <Radio
                          alignItems="start"
                          disabled={selectedBranch.id === branch.id}
                          display="flex"
                          py="3"
                          size="lg"
                          value={"0"}
                          w="full"
                        >
                          <Text display="flex" fontSize="md" fontWeight="medium" mt="-1">
                            {branch.name}{" "}
                            {branch.isSede && (
                              <Box
                                alignItems="center"
                                bgColor="pri.100"
                                color="pri.500"
                                display="flex"
                                h="5"
                                justifyContent="center"
                                ml="3"
                                w="5"
                              >
                                <IconStar width="1rem" />
                              </Box>
                            )}
                          </Text>
                          <Flex alignItems="center" color="gray.500" mt="-1">
                            <IconMapPin size="1rem" />
                            <Text fontSize="sm" ml="0.5" mt="0.5">
                              {reference && `${reference}, `}
                              {sector?.label}, {municipality.label}, {province.label}
                            </Text>
                          </Flex>
                        </Radio>
                      </ListItem>
                      <Divider />
                    </>
                  );
                })}
              </List>
            </RadioGroup>
          </ModalBody>

          <ModalFooter>
            <Button ml={3} variant="ghost">
              Cancelar
            </Button>
            <Button colorScheme="pri" onClick={onClose}>
              Establecer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

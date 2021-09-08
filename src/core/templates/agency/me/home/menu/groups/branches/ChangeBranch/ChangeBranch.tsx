import React, { Fragment, useState, FC } from "react";
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
  Divider,
  Radio,
  RadioGroup,
  Flex,
  Box,
} from "@chakra-ui/react";
import { IconMapPin, IconReplace, IconStar } from "@tabler/icons";
import { useSelector } from "@/store";
import { useChangeToBranch } from "@/graphql";
import axios from "axios";
import router from "next/router";

export const ChangeBranch: FC = () => {
  const { branches, selectedBranch } = useSelector(({ agency }) => agency.myAgency);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { changeToBranch, error, loading } = useChangeToBranch();

  const [value, setValue] = useState("");

  async function onChangeBranch() {
    try {
      const { data } = await changeToBranch({ variables: { input: { switchToBranch: value } } });
      if (data?.changeToBranch) {
        const response = data.changeToBranch;
        await axios.post("/api/auth/update-token", response);

        router.reload();
      }
    } catch (err) {
      console.log(error);
    }
  }

  return (
    <>
      <MenuItem display="flex" h="full" py="1.5" onClick={onOpen}>
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
          <IconReplace size="1.25rem" strokeWidth={1.5} />
        </Box>
        Cambia de sucursal
      </MenuItem>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="sm">
          <ModalHeader>
            <Text>Cambia de Sucursal</Text>
            <Text color="gray.400" fontSize="sm" fontWeight="normal" lineHeight="normal" pr="6">
              Selecciona una sucursal para ver su vista e informaciones
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RadioGroup value={value} onChange={setValue}>
              <List>
                {branches.map(branch => {
                  const { municipality, province, reference, sector } = branch.ubication.direction;
                  const isDisabled = selectedBranch.id === branch.id;
                  return (
                    <Fragment key={branch.id}>
                      <ListItem>
                        <Radio
                          alignItems="start"
                          display="flex"
                          isDisabled={isDisabled}
                          py="3"
                          size="lg"
                          value={branch.id}
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
                    </Fragment>
                  );
                })}
              </List>
            </RadioGroup>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="pri" isLoading={loading} loadingText="Estableciendo" onClick={onChangeBranch}>
              Establecer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

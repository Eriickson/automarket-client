import React, { FC, useState } from "react";
import { IconButton, useDisclosure, Button, Flex } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/system";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
  StackDivider,
  Box,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { AutomarketRDLogo, AutomarketRDIsotipo } from "../../../assets";
import Link from "next/link";
import { useWindowSize } from "@/hooks";
import {
  IconAlignJustified,
  IconDeviceFloppy,
  IconHeadset,
  IconHome,
  IconInfoCircle,
  IconNewSection,
  IconQuestionMark,
  IconSchool,
  IconSearch,
  IconSpeakerphone,
  IconUser,
} from "@tabler/icons";

export const MainMenu: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);
  const { height } = useWindowSize();

  const [itemsMenu] = useState([
    {
      title: "Ir al inicio",
      // subtitle: "@Erickson01d",
      Icon: IconHome,
      href: "/",
    },
    {
      title: "Mi perfil",
      // subtitle: "@Erickson01d",
      Icon: IconUser,
      href: "/me",
    },
    {
      title: "Publica tu vehículo",
      // subtitle: "Comparte tu vehículo con todos",
      Icon: IconSpeakerphone,
      href: "/post/vehicle/new",
    },
    {
      title: "Crea tu agencia",
      subtitle: "",
      Icon: IconNewSection,
      href: "/agency/new",
    },
    {
      title: "Busca publicaciones",
      subtitle: "",
      Icon: IconSearch,
      href: "/post/vehicle/searcher",
    },
    {
      title: "Publicaciones Guardadas",
      subtitle: "",
      Icon: IconDeviceFloppy,
      href: "/post/vehicle/searcher",
    },
    {
      title: "Agencias Profesionales",
      subtitle: "",
      Icon: IconSchool,
      href: "/agency/professional",
    },
    {
      title: "Contáctanos",
      subtitle: "",
      Icon: IconHeadset,
      href: "/about-us/contacts",
    },
    {
      title: "Preguntas y respuestas",
      subtitle: "/about-us/faq",
      Icon: IconQuestionMark,
      href: "",
    },
    {
      title: "Acerca de nosotros",
      subtitle: "/",
      Icon: IconInfoCircle,
      href: "",
    },
    {
      title: "Términos y privacidad",
      subtitle: "/",
      Icon: IconAlignJustified,
      href: "",
    },
  ]);

  return (
    <>
      <IconButton
        aria-label="Abrir el menu"
        borderRadius="sm"
        colorScheme="pri"
        icon={<HamburgerIcon />}
        ref={btnRef}
        onClick={onOpen}
      />
      <Modal isCentered isOpen={isOpen} motionPreset="slideInBottom" onClose={onClose}>
        <ModalOverlay />
        <ModalContent padding="0" rounded="sm">
          <ModalHeader px="3">
            <Flex alignItems="center" w="24">
              <AutomarketRDIsotipo />
              <Text ml="2">Menú</Text>
            </Flex>
            <ModalCloseButton _focus={{ shadow: "none" }} size="lg" />
          </ModalHeader>

          <ModalBody
            borderBottom="1px solid"
            borderColor="gray.200"
            borderTop="1px solid"
            borderTopColor="gray.200"
            paddingX="0"
          >
            <Stack divider={<StackDivider />}>
              {itemsMenu.map((item, i) => (
                <Box h="40px" key={i}>
                  <Link href={item.href}>
                    <chakra.a
                      _active={{ textDecor: "underline" }}
                      alignItems="center"
                      display="flex"
                      fontSize="lg"
                      h="full"
                      px="3"
                    >
                      <Box
                        alignItems="center"
                        bgColor="pri.100"
                        color="pri.500"
                        display="flex"
                        h="10"
                        justifyContent="center"
                        mr="3.5"
                        w="10"
                      >
                        <item.Icon size="1.75rem" strokeWidth={1.5} />
                      </Box>
                      <Box>{item.title}</Box>
                    </chakra.a>
                  </Link>
                </Box>
              ))}
            </Stack>
          </ModalBody>
          <ModalFooter flexDir="column" px="3">
            <Link href="/login/signup">
              <Button colorScheme="pri" mb="2" size="lg" width="full">
                Regístrate
              </Button>
            </Link>
            <Link href="/login/signin">
              <Button colorScheme="pri" size="lg" variant="outline" width="full">
                Iniciar Sesión
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

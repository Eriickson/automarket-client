import React, { FC } from "react";

import { MainLayout } from "@/layouts";
import { PrimaryCard } from "@/components";
import {
  GridItem,
  Heading,
  SimpleGrid,
  VStack,
  Text,
  HStack,
  Divider,
  Box,
  Button,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  IconButton,
  Avatar,
} from "@chakra-ui/react";
import { PostCarousel } from "./postCarousel/PostCarousel";
import { IconClock, IconHeart, IconMapPin } from "@tabler/icons";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";

export const PostTemplate: FC = () => {
  return (
    <MainLayout>
      <SimpleGrid columns={12} gap={3}>
        <GridItem colSpan={[12, null, null, 8]}>
          <VStack align="inherit">
            <PostCarousel />
            <PrimaryCard notBorderTop>
              <HStack justifyContent="space-between">
                <HStack spacing="2.5">
                  <HStack spacing="0.5">
                    <IconMapPin size="1.25rem" />
                    <Text>Santiago / Puñal</Text>
                  </HStack>
                  <HStack spacing="0.5">
                    <IconClock size="1.25rem" />
                    <Text>Hace 5 Días</Text>
                  </HStack>
                </HStack>
                <Text color="green.600" fontSize="xl" fontWeight="medium">
                  RD$ 250,000.00
                </Text>
              </HStack>
              <Divider my="2" />
              <Box flex="2">
                <Heading size="md">Vendo Toyota Corolla Recien importado</Heading>
                <Text maxW="3xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, odit cum! Repellendus dignissimos
                  dolores quo blanditiis, atque aut placeat commodi labore debitis voluptatibus harum iusto sequi
                  expedita ut, architecto possimus.
                </Text>
              </Box>
            </PrimaryCard>
          </VStack>
        </GridItem>
        <GridItem colSpan={[12, null, null, 4]}>
          <VStack align="inherit">
            <PrimaryCard>
              <HStack align="inherit" >
                <Avatar rounded="sm" size="2xl" />
                <Box>
                  <Text fontSize="2xl" fontWeight="semibold" lineHeight="normal">Erickson Auto Import</Text>
                  <Text color="gray.400" fontSize="lg" fontWeight="semibold">Los más confiados en el negocio</Text>
                </Box>
              </HStack>
            </PrimaryCard>
            <PrimaryCard notBorderTop>
              <Heading size="md" mb="3">
                Contactos
              </Heading>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={EmailIcon} color="gray.600" />
                  Principal: +1 (829) 816-0959
                </ListItem>
                <ListItem>
                  <ListIcon as={EmailIcon} color="gray.600" />
                  Principal: +1 (829) 816-0959
                </ListItem>
                <ListItem>
                  <ListIcon as={PhoneIcon} color="gray.600" />
                  Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
                {/* You can also use custom icons from react-icons */}
                <ListItem>
                  <ListIcon as={PhoneIcon} color="gray.600" />
                  Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
                <ListItem display="flex">
                  <IconButton
                    colorScheme="red"
                    mr="2"
                    variant="outline"
                    aria-label="guardar publicación"
                    icon={<IconHeart />}
                  />
                  <Button w="full" colorScheme="pri">
                    Contactar
                  </Button>
                </ListItem>
              </List>
            </PrimaryCard>
          </VStack>
        </GridItem>
      </SimpleGrid>
    </MainLayout>
  );
};

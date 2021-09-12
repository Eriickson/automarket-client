import React, { FC } from "react";

// Packages
import Zoom from "react-medium-image-zoom";
import { IconEdit } from "@tabler/icons";
import { Flex, Text, StackDivider, VStack, Img, IconButton, UnorderedList, ListItem } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import router from "next/router";

// My Elements
import { useCreateAgencyPayload } from "@/graphql";
import { capitalizeString } from "@/utils";
import { useUIContext } from "@/context";
import { useSelector } from "@/store";

// My Components
import { ApolloErrorComponent, FormWizardProvider, useWizard } from "@/components";

export const VerifyStep: FC = () => {
  const { agencyData, ubication, contacts } = useSelector(({ agency }) => agency.new);
  const methods = useForm();
  const { createAgency, error } = useCreateAgencyPayload();
  const { changeStep } = useWizard();
  const { activateLoadingScreen, closeLoadingScreen } = useUIContext();

  async function onSubmit() {
    activateLoadingScreen("Creando tu agencía");
    const newAgency = {
      ...agencyData,
      logo: agencyData.logo,
      ubication: {
        direction: {
          provinceId: String(ubication.province.id),
          municipalityId: String(ubication.municipality.id),
          sectorId: String(ubication.sector.id),
          reference: ubication.reference,
        },
      },
      contacts,
    };

    try {
      const { data } = await createAgency({
        variables: { createAgencyInput: newAgency },
      });
      if (data?.createAgency.successful) {
        router.push("/agency/me");
        return;
      }
      closeLoadingScreen();
    } catch (err) {
      closeLoadingScreen();
    }
  }

  return (
    <>
      <FormWizardProvider methods={methods} onSubmit={onSubmit}>
        <VStack alignItems="stretch" divider={<StackDivider borderColor="gray.200" />}>
          <Flex justifyContent="flex-start">
            <Text color="gray.400" flex="1" fontWeight="medium" mr="5" textAlign="end">
              Logo
            </Text>
            <Text flex="1" fontWeight="semibold">
              <Zoom zoomMargin={150}>
                <Img src={agencyData.logo.src} w="32" />
              </Zoom>
            </Text>
          </Flex>
          <Flex justifyContent="flex-start">
            <Text color="gray.400" flex="1" fontWeight="medium" mr="5" textAlign="end">
              Nombre
            </Text>
            <Text flex="1" fontWeight="semibold">
              {agencyData.name}
            </Text>
            <IconButton
              aria-label="Editar nombre"
              icon={<IconEdit size="1.25rem" />}
              size="sm"
              onClick={() => changeStep(0)}
            />
          </Flex>
          <Flex justifyContent="flex-start">
            <Text color="gray.400" flex="1" fontWeight="medium" mr="5" textAlign="end">
              Agencia Profesional
            </Text>
            <Text flex="1" fontWeight="semibold">
              {agencyData.isProfessional ? "SÍ" : "NO"}
            </Text>
          </Flex>
          <Flex justifyContent="flex-start">
            <Text color="gray.400" flex="1" fontWeight="medium" mr="5" textAlign="end">
              Eslogan
            </Text>
            <Text flex="1" fontWeight="semibold">
              {agencyData.slogan}
            </Text>
          </Flex>
          <Flex justifyContent="flex-start">
            <Text color="gray.400" flex="1" fontWeight="medium" mr="5" textAlign="end">
              Dirección
            </Text>
            <Text flex="1" fontWeight="semibold">
              {[
                ubication.reference,
                capitalizeString(ubication.sector.label),
                capitalizeString(ubication.municipality.label),
                ubication.province.label,
              ].join(" / ")}
            </Text>
          </Flex>
          <Flex justifyContent="flex-start">
            <Text color="gray.400" flex="1" fontWeight="medium" mr="5" textAlign="end">
              Contactos
            </Text>
            <UnorderedList flex="1" fontWeight="semibold">
              {contacts.phoneNumbers.map((phoneNumber, i) => (
                <ListItem key={i}>
                  {phoneNumber.label}: {phoneNumber.value}
                </ListItem>
              ))}
              {contacts.emails.map((email, i) => (
                <ListItem key={i}>
                  {email.label}: {email.value}
                </ListItem>
              ))}
            </UnorderedList>
          </Flex>
          {/* <Flex justifyContent="flex-start">
          <Text color="gray.400" flex="1" fontWeight="medium" mr="5" textAlign="end">
            Contactos
          </Text>
          <List flex="1" fontWeight="semibold" spacing={3}>
            {contacts.numbersPhone.map((numberPhone, i) => (
              <ListItem key={i}>
                <ListIcon as={IconPhone} color="green.500" />
                {numberPhone.title}: {numberPhone.value}
                {numberPhone.hasWhatsapp && (
                  <Tag colorScheme="whatsapp" ml="1">
                    Whatsapp
                  </Tag>
                )}
              </ListItem>
            ))}
          </List>
        </Flex> */}
        </VStack>
      </FormWizardProvider>
      <ApolloErrorComponent error={error} />
    </>
  );
};

import React, { FC } from "react";

// Packages
import Zoom from "react-medium-image-zoom";
import { IconPhone } from "@tabler/icons";
import { Flex, Text, StackDivider, VStack, Img, List, ListItem, ListIcon, Tag } from "@chakra-ui/react";

// My Elements
import { useSelector } from "@/store";
import { capitalizeString } from "@/utils";
import { FormWizardProvider } from "@/components";
import { useCreateAgencyPayload } from "@/graphql";
import { useForm } from "react-hook-form";

export const VerifyStep: FC = () => {
  const { agencyData, ubication, contacts } = useSelector(({ agency }) => agency.new);
  const methods = useForm();
  const { createAgency } = useCreateAgencyPayload();

  async function onSubmit() {
    /* eslint-disable-next-line */
    const { src, originalSrc, ...logo } = agencyData.logo;

    const agency = {
      ...agencyData,
      logo,
      ubication: {
        direction: {
          province: String(ubication.province.value),
          municipality: String(ubication.municipality.value),
          sector: String(ubication.sector.value),
          reference: ubication.reference,
        },
      },
      contacts: {
        numberPhones: contacts.numbersPhone.map(numberPhone => ({
          label: numberPhone.title,
          value: numberPhone.value,
          payload: {
            hasWhatsapp: numberPhone.hasWhatsapp,
          },
        })),
        emails: [{ label: "Mi label", value: "erickson01d@gmail.com" }],
      },
    };

    try {
      const { data } = await createAgency({ variables: { agency } });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
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
        </Flex>
      </VStack>
    </FormWizardProvider>
  );
};

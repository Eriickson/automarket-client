import React, { FC } from "react";

// Packages
import Zoom from "react-medium-image-zoom";
import { IconEdit } from "@tabler/icons";
import { Flex, Text, StackDivider, VStack, Img, IconButton } from "@chakra-ui/react";

// My Elements
import { useSelector } from "@/store";
import { capitalizeString } from "@/utils";
import { FormWizardProvider, useWizard } from "@/components";
import { useCreateAgencyPayload } from "@/graphql";
import { useForm } from "react-hook-form";

export const VerifyStep: FC = () => {
  const { agencyData, ubication } = useSelector(({ agency }) => agency.new);
  const methods = useForm();
  const { createAgency } = useCreateAgencyPayload();
  const { changeStep } = useWizard();

  async function onSubmit() {
    /* eslint-disable-next-line */
    const { aspectRatio, cropArea, file, flip, id, point, rotation, zoom, originalFile } = agencyData.logo;

    /* eslint-disable-next-line */
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMmJlMjk4NDU5ZDYyYTQ4NDAwMGNkYiIsIm5hbWUiOiJFcmlja3NvbiBNYW51ZWwiLCJsYXN0bmFtZSI6IkhvbGd1w61uIiwiZW1haWwiOiJlcmlja3NvbjAxZEBnbWFpbC5jb20iLCJwcm9maWxlUGljdHVyZSI6eyJmaWxlbmFtZSI6IjljN2M2NzdkLWMyNDktNDA1ZC1iNThkLTk3MTk0ZTkxOTcxOS5qcGciLCJjcmVhdGVkQXQiOiJTdW4gQXVnIDI5IDIwMjEgMTU6NDA6MDggR01ULTA0MDAgKGhvcmEgZGUgQm9saXZpYSkifSwiaWF0IjoxNjMwMjgxMjg3LCJleHAiOjE2MzAyODQ4ODd9.mMsnGmG4oDKQ1xb_U6TaR0DxBHsMYn27ArHOkQkAlVI";

    const newAgency = {
      ...agencyData,
      logo: {
        aspectRatio,
        cropArea,
        file,
        flip,
        id,
        point,
        rotation,
        zoom,
        originalFile,
      },
      ubication: {
        direction: {
          provinceId: String(ubication.province.id),
          municipalityId: String(ubication.municipality.id),
          sectorId: String(ubication.sector.id),
          reference: ubication.reference,
        },
      },
    };

    try {
      const { data } = await createAgency({
        variables: { createAgencyInput: newAgency },
        context: { headers: { authorization: `Bearer ${token}` } },
      });
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
  );
};

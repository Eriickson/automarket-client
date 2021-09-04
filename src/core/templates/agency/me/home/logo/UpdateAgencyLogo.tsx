import React, { FC, useState } from "react";

// Packages
import { Box, IconButton, useDisclosure } from "@chakra-ui/react";

// My Elements
import { IGeneratedImage } from "@/shared";
import { useUpdateAgencyLogo } from "@/graphql";

// My Components
import { UploadFiles, CropImage } from "@/components";
import { IconEdit } from "@tabler/icons";

export const UpdateAgencyLogo: FC = () => {
  const [logoSelected, setLogoSelected] = useState<IGeneratedImage | null>();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { updateAgencyLogoFetch } = useUpdateAgencyLogo();

  async function updateAgencyLogo(newLogo: IGeneratedImage) {
    const input = { input: { newLogo } };
    console.log(input);

    try {
      const response = await updateAgencyLogoFetch(input);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Box>
      <UploadFiles
        btn={() => (
          <IconButton
            aria-label="editar logo de la agencia"
            color="white"
            colorScheme="blackAlpha"
            icon={<IconEdit size="1.25rem" />}
            size="sm"
          />
        )}
        handleOnlyOneFile={file => {
          setLogoSelected(file);
          onOpen();
        }}
      />
      {logoSelected && (
        <CropImage
          defaultValue={{ aspectRatio: "4:3" }}
          image={logoSelected}
          isOpen={isOpen}
          name="agency-logo"
          onClose={onClose}
          onSave={newFile => updateAgencyLogo({ ...logoSelected, ...newFile })}
        />
      )}
    </Box>
  );
};

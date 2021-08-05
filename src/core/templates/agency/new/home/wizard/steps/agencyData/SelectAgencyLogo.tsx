import React, { FC, useEffect, useState } from "react";

// Packages
import { Box, Button, useDisclosure } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

// My Elements
import { IGeneratedImage } from "@/shared";

// My Components
import { Avatar, LabelInput, UploadFiles, CropImage } from "@/components";
import { useSelector } from "@/store";

export const SelectAgencyLogo: FC = () => {
  const { agencyData } = useSelector(({ agency }) => agency.new);
  const [logoSelected, setLogoSelected] = useState<IGeneratedImage | null>();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { setValue, watch } = useFormContext();

  useEffect(() => {
    if (agencyData?.logo) {
      console.log("hay logo");
    }
    /* 
    if (agencyData.logo) {
      setValue("logo", agencyData.logo);
    } */
  }, []);
  return (
    <Box>
      <LabelInput isRequired label="Logo de la agencia" />
      <Avatar mb="2" size="2xl" src={watch("logo") ? watch("logo").src : ""} />
      <UploadFiles
        btn={() => <Button>{watch("logo") ? "Cambiar logo" : "Seleccionar logo"}</Button>}
        handleOnlyOneFile={file => {
          setLogoSelected(file);
          onOpen();
        }}
      />
      {logoSelected && (
        <CropImage
          defaultValue={{ aspectRatio: "1:1" }}
          image={logoSelected}
          isOpen={isOpen}
          name="agency-logo"
          onClose={onClose}
          onSave={newFile => {
            setValue("logo", newFile);
          }}
        />
      )}
    </Box>
  );
};

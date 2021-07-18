import { Box, Button } from "@chakra-ui/react";
import { NextPage } from "next";
import React, { FC } from "react";
import { useUIContext } from "@/context";

const ToastPage: NextPage = () => {
  const { toast } = useUIContext();
  console.log(toast);

  return (
    <Box m="44">
      <Button
        onClick={() =>
          toast.showToast({
            title: "Error aquí",
            desc: "Hola a todoe l mundo",
          })
        }
      >
        Show Toast
      </Button>
    </Box>
  );
};

export default ToastPage;

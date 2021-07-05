import React from "react";

import { ConfirmPasswordModal } from "@/components";
import { MainLayout } from "@/layouts";

const ModalPassword = () => {
  function hasSuccess(success: boolean | null) {
    console.log(success);
  }

  return (
    <MainLayout>
      <ConfirmPasswordModal labelButton="Cambiar contraseña" hasSuccess={hasSuccess} />
    </MainLayout>
  );
};

export default ModalPassword;

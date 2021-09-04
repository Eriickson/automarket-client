import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export type ChangeUserPassword = {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

const schema = yup.object().shape({
  currentPassword: yup
    .string()
    .required("Campo requerido")
    .min(6, "Mínimo 6 caracteres")
    .max(20, "Máximo 20 caracteres"),
  newPassword: yup.string().required("Campo requerido").min(6, "Mínimo 6 caracteres").max(20, "Máximo 20 caracteres"),
  confirmNewPassword: yup
    .string()
    .required("Campo requerido")
    .oneOf([yup.ref("newPassword"), null], "Las contraseñas no coinciden"),
});

export const ChangeUserPasswordFormResolver = yupResolver(schema);

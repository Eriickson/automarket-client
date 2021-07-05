import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export type IFormConfirmPasswordOnSubmit = {
  confirmPassword: string;
};

// Variables and Constants
const schema = yup.object().shape({
  confirmPassword: yup
    .string()
    .required("Contraseña obligatoria")
    .min(8, "Mínimo 8 caracteres")
    .max(25, "Máximo 25 caracteres"),
});

export const ConfirmPasswordResolver = yupResolver(schema);

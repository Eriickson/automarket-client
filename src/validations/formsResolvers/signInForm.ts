import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export type IFormSignInOnSubmit = {
  identifier: string;
  password: string;
};

// Variables and Constants
const schema = yup.object().shape({
  identifier: yup
    .string()
    .required("Identificador obligatorio")
    .min(6, "Mínimo 6 caracteres")
    .max(50, "Máximo 50 caracteres"),
  password: yup
    .string()
    .required("Contraseña obligatoria")
    .min(8, "Mínimo 8 caracteres")
    .max(25, "Máximo 25 caracteres"),
  // remember: yup.boolean(),
});

export const FormSignInResolver = yupResolver(schema);

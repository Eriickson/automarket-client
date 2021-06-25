import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export type IFormSignUpOnSubmit = {
  email: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Correo electrónico requerido")
    .max(50, "Máximo 50 caracteres")
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Ingrese un correo electrónico válido"),
});

export const FormSignUpResolver = yupResolver(schema);

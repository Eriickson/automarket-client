import * as yup from "yup";

export const sendEmailRegisterBody = yup.object().shape({
  email: yup
    .string()
    .required("Correo electrónico requerido")
    .max(50, "Máximo 50 caracteres")
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Ingrese un correo electrónico válido"),
  provider: yup.string().required("Correo electrónico requerido"),
});

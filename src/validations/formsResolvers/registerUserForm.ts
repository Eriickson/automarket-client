import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// My Elements
import { IOption } from "@/shared";

export type RegisterUserOnSubmitFormType = {
  profilePicture: {
    file: File;
    cropArea: {
      x: number;
      y: number;
      w: number;
      h: number;
    };
  };
  name: string;
  lastname: string;
  province: IOption;
  municipality: IOption;
  birthday: string;
  sex: string;
  username: string;
  password: string;
  confirmPassword: string;
};

const schema = yup.object().shape({
  profilePicture: yup
    .object()
    .required("Seleccione una imagen de perfil")
    .shape({
      file: yup.mixed<File>(),
      croppedArea: yup.object().shape({
        x: yup.number(),
        y: yup.number(),
        w: yup.number(),
        h: yup.number(),
      }),
    }),
  name: yup.string().required("Ingrese su nombre"),
  lastname: yup.string().required("Ingrese su apellido"),
  province: yup
    .object()
    .shape({
      label: yup.string().required("Seleccione una provincia"),
      value: yup.string().required("Seleccione una provincia"),
    })
    .nullable(),
  municipality: yup
    .object()
    .shape({
      label: yup.string().required("Seleccione un municipio"),
      value: yup.string().required("Seleccione un municipio"),
    })
    .required()
    .nullable(),
  birthday: yup.string().required("Ingrese tu fecha de nacimiento"),
  sex: yup.string().required("Ingrese su sexo"),
  username: yup
    .string()
    .required("Ingrese un nombre de usuario")
    .min(6, "Mínimo 6 caracteres")
    .max(20, "Máximo 20 caracteres"),
  password: yup
    .string()
    .required("Ingrese una contraseña")
    .min(8, "Mínimo 8 caracteres")
    .max(25, "Máximo 25 caracteres"),
  confirmPassword: yup
    .string()
    .required("Confirma tu contraseña")
    .oneOf([yup.ref("password"), null], "Las contraseñas no coinciden"),
});

export const RegisterUserFormResolver = yupResolver(schema);

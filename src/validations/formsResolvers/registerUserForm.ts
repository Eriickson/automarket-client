import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// My Elements
import { Option, IGeneratedImage } from "@/shared";

export type RegisterUserOnSubmitFormType = {
  profilePicture: IGeneratedImage;
  name: string;
  lastname: string;
  province: Option;
  municipality: Option;
  birthday: string;
  sex: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const schema = yup.object().shape({
  profilePicture: yup.object().shape({
    file: yup.mixed<File>(),
    cropArea: yup.object().shape({
      x: yup.number(),
      y: yup.number(),
      w: yup.number(),
      h: yup.number(),
    }),
  }),
  name: yup.string().required("Campo requerido"),
  lastname: yup.string().required("Campo requerido"),
  province: yup
    .object()
    .shape({
      label: yup.string().required("Campo requerido"),
      id: yup.string().required("Campo requerido"),
    })
    .nullable(),
  municipality: yup
    .object()
    .shape({
      label: yup.string().required("Campo requerido"),
      id: yup.string().required("Campo requerido"),
    })
    .required()
    .nullable(),
  birthday: yup.string().required("Campo requerido"),
  sex: yup.string().required("Ingrese su sexo"),
  username: yup.string().required("Campo requerido").min(6, "Mínimo 6 caracteres").max(20, "Máximo 20 caracteres"),
  password: yup.string().required("Campo requerido").min(8, "Mínimo 8 caracteres").max(25, "Máximo 25 caracteres"),
  confirmPassword: yup
    .string()
    .required("Campo requerido")
    .oneOf([yup.ref("password"), null], "Las contraseñas no coinciden"),
});

export const RegisterUserFormResolver = yupResolver(schema);

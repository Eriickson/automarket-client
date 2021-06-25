import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// My Elements
import { IOption } from "@/shared";

export interface EditProfileFormOnSubmit {
  name: string;
  lastname: string;
  province: IOption;
  municipality: IOption;
  birthday: string;
  sex: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Campo requerido"),
  lastanme: yup.string().required("Campo requerido"),
  province: yup
    .object()
    .shape({
      label: yup.string().required("Campo requerido"),
      value: yup.string().required("Campo requerido"),
    })
    .nullable(),
  municipality: yup
    .object()
    .shape({
      label: yup.string().required("Campo requerido"),
      value: yup.string().required("Campo requerido"),
    })
    .nullable(),
  birthday: yup.string().required("Campo requerido"),
  sex: yup.boolean().required("Campo requerido"),
});

export const editProfileFormResolver = yupResolver(schema);

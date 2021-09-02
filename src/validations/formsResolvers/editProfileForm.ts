import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// My Elements
import { Option, SexEnum } from "@/shared";

export interface EditProfileFormOnSubmit {
  name: string;
  lastname: string;
  province: Option;
  municipality: Option | null;
  birthday: string;
  sex: SexEnum;
}

const schema = yup.object().shape({
  name: yup.string().required("Campo requerido"),
  lastname: yup.string().required("Campo requerido"),
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
  sex: yup.string().required("Campo requerido"),
});

export const editProfileFormResolver = yupResolver(schema);

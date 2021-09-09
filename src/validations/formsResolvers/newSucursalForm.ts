import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// My Elements
import { ContactMap, Option } from "@/shared";

export type NewSucursalOnSubmitFormType = {
  province: Option;
  municipality: Option;
  sector: Option;
  reference: string;
  name: string;
  contacts: ContactMap;
};

const schema = yup.object().shape({
  province: yup
    .object()
    .shape({
      label: yup.string().required("Seleccione una provincia"),
      id: yup.string().required("Seleccione una provincia"),
    })
    .required("Seleccione una provincia")
    .nullable(),
  municipality: yup
    .object()
    .shape({
      label: yup.string().required("Seleccione un municipio"),
      id: yup.string().required("Seleccione un municipio"),
    })
    .required("Seleccione un municipio")
    .nullable(),
  sector: yup
    .object()
    .shape({
      label: yup.string().required("Seleccione un sector"),
      id: yup.string().required("Seleccione un sector"),
    })
    .required("Seleccione un sector")
    .nullable(),
  reference: yup.string().required("Ingrese la referencia de su agencia"),
  name: yup.string().required("Campo requerido"),
});

export const NewSucursalFormResolver = yupResolver(schema);

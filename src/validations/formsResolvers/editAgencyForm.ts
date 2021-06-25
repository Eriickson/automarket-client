import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// My Elements
import { IOption } from "@/shared";

export type EditAgencyOnSubmitFormType = {
  province: IOption;
  municipality: IOption;
  sector: IOption;
  reference: string;
};

const schema = yup.object().shape({
  province: yup
    .object()
    .shape({
      label: yup.string().required("Seleccione una provincia"),
      value: yup.string().required("Seleccione una provincia"),
    })
    .required("Seleccione una provincia")
    .nullable(),
  municipality: yup
    .object()
    .shape({
      label: yup.string().required("Seleccione un municipio"),
      value: yup.string().required("Seleccione un municipio"),
    })
    .required("Seleccione un municipio")
    .nullable(),
  sector: yup
    .object()
    .shape({
      label: yup.string().required("Seleccione un sector"),
      value: yup.string().required("Seleccione un sector"),
    })
    .required("Seleccione un sector")
    .nullable(),
  reference: yup.string().required("Ingrese la referencia de su agencia"),
});

export const EditAgencyFormResolver = yupResolver(schema);

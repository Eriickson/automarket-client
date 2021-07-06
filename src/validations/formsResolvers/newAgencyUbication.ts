import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
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
  sector: yup
    .object()
    .shape({
      label: yup.string().required("Campo requerido"),
      value: yup.string().required("Campo requerido"),
    })
    .nullable(),
  reference: yup.string().required("Campo requerido"),
});

export const NewAgencyUbicationResolver = yupResolver(schema);

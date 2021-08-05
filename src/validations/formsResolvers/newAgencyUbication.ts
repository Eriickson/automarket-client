import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  province: yup.object().required("Campo requerido").nullable(),
  municipality: yup.object().required("Campo requerido").nullable(),
  sector: yup.object().required("Campo requerido").nullable(),
  reference: yup.string().required("Campo requerido"),
});

export const NewAgencyUbicationResolver = yupResolver(schema);
/* .required("Campo requerido") */

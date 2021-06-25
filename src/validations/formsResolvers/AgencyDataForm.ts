import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export interface AgencyDataFormOnSubmit {
  name: string;
  slogan: string;
  isProfessional: boolean;
}

const schema = yup.object().shape({
  name: yup.string().required("Campo requerido").min(8, "Mín. 8 caracteres"),
  slogan: yup.string().required("Campo requerido").min(8, "Mín. 8 caracteres"),
  isProfessional: yup.boolean().required("Campo requerido"),
});

export const agencyDataFormResolver = yupResolver(schema);

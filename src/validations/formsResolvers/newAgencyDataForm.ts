import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export interface INewAgencyDataFormOnSubmit {
  name: string;
  slogan: string;
  isProfessional: boolean;
}

const schema = yup.object().shape({
  name: yup.string().required("Campo requerido").min(6, "Mín. 6 caracteres"),
  slogan: yup.string().required("Campo requerido").min(6, "Mín. 6 caracteres"),
  isProfessional: yup.boolean().required("Campo requerido"),
});

export const NewAgencyDataResolver = yupResolver(schema);

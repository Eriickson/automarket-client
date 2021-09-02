import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export type EditAgencyInformationFormType = {
  name: string;
  slogan: string;
};

const schema = yup.object().shape({
  name: yup.string().required("Campo requerido"),
  slogan: yup.string().required("Campo requerido"),
});

export const EditAgencyInformationFormResolver = yupResolver(schema);

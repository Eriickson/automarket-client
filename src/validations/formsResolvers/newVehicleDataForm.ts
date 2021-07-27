import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// My Elements
import { IOption } from "@/shared";

export interface NewVehicleInformationFormOnSubmit {
  brand: IOption;
  model: IOption;
  typeModel: IOption;
  year: IOption;
  category: IOption;
  fuel: IOption;
  transmission: IOption;
  traction: IOption;
  cylinders: IOption;
  condition: IOption;
  paintColor: IOption;
  interiorColor: IOption;
  passengers: number;
  doors: number;
  minAmount: number;
  amount: number;
  mileageUnit: string;
  mileageValue: number;
}

// Variables and Constants
const schema = yup.object().shape({
  brand: yup
    .object()
    .shape({
      label: yup.string().required("Campo requerido"),
      value: yup.string().required("Campo requerido"),
    })
    .required("Campo requerido")
    .nullable(),
  model: yup
    .object()
    .shape({
      label: yup.string().required("Campo requerido"),
      value: yup.string().required("Campo requerido"),
    })
    .required()
    .nullable(),
  typeModel: yup
    .object()
    .shape({
      label: yup.string(),
      value: yup.string(),
    })
    .nullable(),
  year: yup
    .object()
    .shape({
      label: yup.string().required("Campo requerido"),
      value: yup.string().required("Campo requerido"),
    })
    .required()
    .nullable(),
  category: yup
    .object()
    .shape({
      label: yup.string().required("Campo requerido"),
      value: yup.string().required("Campo requerido"),
    })
    .required()
    .nullable(),
  fuel: yup
    .object()
    .shape({
      label: yup.string().required("Campo requerido"),
      value: yup.string().required("Campo requerido"),
    })
    .required()
    .nullable(),
  transmission: yup
    .object()
    .shape({
      label: yup.string().required("Campo requerido"),
      value: yup.string().required("Campo requerido"),
    })
    .required()
    .nullable(),
  traction: yup
    .object()
    .shape({
      label: yup.string().required("Campo requerido"),
      value: yup.string().required("Campo requerido"),
    })
    .required()
    .nullable(),
  cylinders: yup
    .object()
    .shape({
      label: yup.string().required("Campo requerido"),
      value: yup.string().required("Campo requerido"),
    })
    .required()
    .nullable(),
  condition: yup
    .object()
    .shape({
      label: yup.string().required("Campo requerido"),
      value: yup.string().required("Campo requerido"),
    })
    .required()
    .nullable(),
  paintColor: yup
    .object()
    .shape({
      label: yup.string().required("Campo requerido"),
      value: yup.string().required("Campo requerido"),
    })
    .required()
    .nullable(),
  interiorColor: yup
    .object()
    .shape({
      label: yup.string().required("Campo requerido"),
      value: yup.string().required("Campo requerido"),
    })
    .required()
    .nullable(),
  passengers: yup
    .number()
    .required("Campo requerido")
    .min(1, "Mínimo 1")
    .max(20, "Máximo 20")
    .nullable()
    .transform((v, o) => (o === "" ? null : v)),
  doors: yup
    .number()
    .required("Campo requerido")
    .min(2, "Mínimo 2")
    .max(10, "Máximo 10")
    .nullable()
    .transform((v, o) => (o === "" ? null : v)),
  currency: yup.string().required(),
  minAmount: yup.number().default(50000),
  amount: yup
    .number()
    .required("Campo requerido")
    .nullable()
    .transform((v, o) => (o === "" ? null : v)),
  mileageUnit: yup.string().required(),
  mileageValue: yup
    .number()
    .required("Campo requerido")
    .nullable()
    .transform((v, o) => (o === "" ? null : v)),
});

export const newVehicleInformationFormResolver = yupResolver(schema);

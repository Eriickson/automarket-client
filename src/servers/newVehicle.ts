import { GetServerSideProps } from "next";
import { getApolloClient as getApolloClient } from "@/graphql";
import combineQuery from "graphql-combine-query";

import { gql } from "@/graphql";
import { IOption } from "@/shared";
import {
  IGetAccesoriesPayload,
  IGetBrandsPayload,
  IGetColorsPayload,
  IGetConditionsPayload,
  IGetFeaturesPayload,
  IGetIncludesPayload,
  IGetFuelsPayload,
  IGetTractionsPayload,
  IGetTransmissionsPayload,
  IGetVehicleCategoriesPayload,
} from "src/graphql/gql";
import { IGetVersionsPayload } from "src/graphql/gql/queries/GetVersions";

export interface NewVehicleProps {
  information: {
    accesories: IOption[];
    brands: IOption[];
    conditions: IOption[];
    vehicleCategories: IOption[];
    colors: IOption[];
    fuels: IOption[];
    tractions: IOption[];
    transmissions: IOption[];
    features: IOption[];
    includes: IOption[];
  };
}

export const newVehicleServerSide: GetServerSideProps = async () => {
  const { client } = getApolloClient();
  const {
    GET_ACCESSORIES_Q,
    GET_FEATURES_Q,
    GET_BRANDS_Q,
    GET_CONDITIONS_Q,
    GET_INCLUDES_Q,
    GET_VEHICLE_CATEGORIES_Q,
    GET_COLORS_Q,
    GET_FUELS_Q,
    GET_TRACTIONS_Q,
    GET_TRANSMISSIONS_Q,
  } = gql;

  const { document: DOCUMENT } = combineQuery("initialState")
    .add<IGetAccesoriesPayload>(GET_ACCESSORIES_Q)
    .add(GET_FEATURES_Q)
    .add(GET_BRANDS_Q)
    .add(GET_CONDITIONS_Q)
    .add(GET_VEHICLE_CATEGORIES_Q)
    .add(GET_COLORS_Q)
    .add(GET_FUELS_Q)
    .add(GET_INCLUDES_Q)
    .add(GET_TRACTIONS_Q)
    .add(GET_TRANSMISSIONS_Q);

  try {
    const {
      data: {
        getAccesories,
        getBrands,
        getColors,
        getConditions,
        getFeatures,
        getFuels,
        getTractions,
        getTransmissions,
        getVehicleCategories,
        getIncludes,
      },
    } = await client.query<
      IGetAccesoriesPayload &
        IGetFeaturesPayload &
        IGetVersionsPayload &
        IGetBrandsPayload &
        IGetConditionsPayload &
        IGetVehicleCategoriesPayload &
        IGetColorsPayload &
        IGetFuelsPayload &
        IGetIncludesPayload &
        IGetTractionsPayload &
        IGetTransmissionsPayload
    >({ query: DOCUMENT });

    const props: NewVehicleProps = {
      information: {
        accesories: getAccesories.accesories,
        brands: getBrands.brands,
        conditions: getConditions.conditions,
        vehicleCategories: getVehicleCategories.vehicleCategories,
        colors: getColors.colors,
        fuels: getFuels.fuels,
        tractions: getTractions.tractions,
        transmissions: getTransmissions.transmissions,
        features: getFeatures.features,
        includes: getIncludes.includes,
      },
    };

    return {
      props,
    };
  } catch (err: any) {
    throw new Error(err);
  }
};

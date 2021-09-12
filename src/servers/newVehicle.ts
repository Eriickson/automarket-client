import { getApolloClient as getApolloClient } from "@/graphql";
import combineQuery from "graphql-combine-query";

import { gql } from "@/graphql";
import { Branch, GetServerSideProps, Option, ProvidersProps } from "@/shared";
import {
  GetAccesoriesPayload,
  GetBrandsPayload,
  GetColorsPayload,
  GetConditionsPayload,
  GetFeaturesPayload,
  GetIncludesPayload,
  GetFuelsPayload,
  GetTractionsPayload,
  GetTransmissionsPayload,
  GetVehicleCategoriesPayload,
  GetBranchesPayload,
  GetBranchesVariables,
} from "src/graphql/gql";
import { GetVersionsPayload } from "src/graphql/gql/queries/GetVersions";
import { authorization } from "@/auth";

export interface NewVehicleProps extends ProvidersProps {
  information: {
    accesories: Option[];
    brands: Option[];
    conditions: Option[];
    vehicleCategories: Option[];
    colors: Option[];
    fuels: Option[];
    tractions: Option[];
    transmissions: Option[];
    features: Option[];
    additions: Option[];
  };
  branches: Branch[];
}

export const newVehicleServerSide: GetServerSideProps<NewVehicleProps> = async ctx => {
  const auth = await authorization({ ctx, roles: ["AGENCY"] });
  const { client } = getApolloClient();
  const {
    GET_ACCESSORIES_Q,
    GET_FEATURES_Q,
    GET_BRANDS_Q,
    GET_CONDITIONS_Q,
    GET_ADDITIONS_Q,
    GET_VEHICLE_CATEGORIES_Q,
    GET_COLORS_Q,
    GET_FUELS_Q,
    GET_TRACTIONS_Q,
    GET_TRANSMISSIONS_Q,
    GET_BRANCHES_Q,
  } = gql;

  console.log({
    filter: {
      agencyId: "6138dc3b121d7a10febba21f",
    },
  });

  const { document: DOCUMENT } = combineQuery("initialState")
    .add<GetAccesoriesPayload>(GET_ACCESSORIES_Q)
    .add(GET_FEATURES_Q)
    .add(GET_BRANDS_Q)
    .add(GET_CONDITIONS_Q)
    .add(GET_VEHICLE_CATEGORIES_Q)
    .add(GET_COLORS_Q)
    .add(GET_FUELS_Q)
    .add(GET_ADDITIONS_Q)
    .add(GET_TRACTIONS_Q)
    .add(GET_TRANSMISSIONS_Q);

  const branches = await client.query({
    query: GET_BRANCHES_Q,
    variables: {
      filter: { agencyId: auth.agency?.id },
    },
  });

  console.log({ branches });

  const {
    data: {
      getAccessories,
      getBrands,
      getColors,
      getConditions,
      getFeatures,
      getFuels,
      getTractions,
      getTransmissions,
      getVehicleCategories,
      getAdditions,
    },
  } = await client.query<
    GetAccesoriesPayload &
      GetFeaturesPayload &
      GetVersionsPayload &
      GetBrandsPayload &
      GetConditionsPayload &
      GetVehicleCategoriesPayload &
      GetColorsPayload &
      GetFuelsPayload &
      GetIncludesPayload &
      GetTractionsPayload &
      GetTransmissionsPayload &
      GetBranchesPayload
  >({ query: DOCUMENT });

  const props: NewVehicleProps = {
    information: {
      accesories: getAccessories.accessories,
      brands: getBrands.brands,
      conditions: getConditions.conditions,
      vehicleCategories: getVehicleCategories.vehicleCategories,
      colors: getColors.colors,
      fuels: getFuels.fuels,
      tractions: getTractions.tractions,
      transmissions: getTransmissions.transmissions,
      features: getFeatures.features,
      additions: getAdditions.additions,
    },
    branches: branches.data.getBranches.branches,
    seo: {
      title: "Nuevo vehículo",
      desc: "Agrega un nuevo vehiculo",
    },
    authProviderProps: auth,
  };

  return {
    props,
  };
};

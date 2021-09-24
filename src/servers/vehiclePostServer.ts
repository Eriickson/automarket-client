import { authorization } from "@/auth";
import { GetServerSideProps, ProvidersProps } from "@/shared";

/* eslint-disable @typescript-eslint/no-empty-interface */
interface VehiclePostProps extends ProvidersProps {}

export const vehiclePostServerSide: GetServerSideProps<VehiclePostProps> = async ctx => {
  const auth = await authorization({ ctx, roles: ["ALL"] });

  const props: VehiclePostProps = {
    authProviderProps: auth,
    seo: {
      title: "Inicio - Automarket rd",
      desc: "Esta es la descripción",
    },
  };
  return { props };
};

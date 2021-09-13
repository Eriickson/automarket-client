import React, { FC } from "react";
import { PricingTemplate } from "@/templates";
import { PlansProps } from "@/servers";
import { useAction } from "@/store";

const PricingPage: FC<PlansProps> = ({ plans }) => {
  const { setPlans } = useAction();

  setPlans(plans);

  return (
    <div>
      <PricingTemplate />
    </div>
  );
};

export { plansServerSide as getServerSideProps } from "@/servers";
export default PricingPage;

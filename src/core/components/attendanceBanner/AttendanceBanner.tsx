import React, { FC } from "react";
import StyckyBox from "react-sticky-box";
import { RequestProfessionalAgency } from "./RequestProfessionalAgency/RequestProfessionalAgency";

export const AttendanceBanner: FC = () => {
  return (
    <StyckyBox bottom style={{ width: "max-content" }}>
      <RequestProfessionalAgency />
    </StyckyBox>
  );
};

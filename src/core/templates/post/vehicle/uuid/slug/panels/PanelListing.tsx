import React, { FC } from "react";
import { Heading, GridItem } from "@chakra-ui/react";

import { IListing, Listing } from "@/components";

interface PanelListingProps {
  title: string;
  listing: IListing[];
}

export const PanelListing: FC<PanelListingProps> = ({ title, listing }) => {
  return (
    <GridItem colSpan={[12, 12, 6]}>
      <Heading fontSize={["md", null, "lg"]} mb="3" size="md">
        {title}
      </Heading>
      <Listing listing={listing} />
    </GridItem>
  );
};

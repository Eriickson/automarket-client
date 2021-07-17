import React, { FC } from "react";
import { Heading, GridItem, Text } from "@chakra-ui/react";

import { IListing, Listing, PrimaryCard } from "@/components";

interface PanelListingProps {
  title: string;
  listing: IListing[];
}

export const PanelListing: FC<PanelListingProps> = ({ title, listing }) => {
  return (
    <GridItem colSpan={[12, 12, 6]}>
      <PrimaryCard notBorderTop>
        <Heading fontSize={["md", null, "lg"]} mb="3" size="md">
          {title}
        </Heading>
        <Listing listing={listing} />
      </PrimaryCard>
    </GridItem>
  );
};

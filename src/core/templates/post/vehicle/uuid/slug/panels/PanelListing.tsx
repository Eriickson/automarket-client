import React, { FC } from "react";
import { Heading, List, ListItem, ListIcon, GridItem, Text } from "@chakra-ui/react";

import { PrimaryCard } from "@/components";

interface PanelListingProps {
  title: string;
  listing: {
    label: string;
    IconList: FC;
  }[];
}

export const PanelListing: FC<PanelListingProps> = ({ title, listing }) => {
  return (
    <GridItem colSpan={[12, 12, 6]}>
      <PrimaryCard notBorderTop>
        <Heading fontSize={["md", null, "lg"]} mb="3" size="md">
          {title}
        </Heading>
        <List display={["flex", null, "block"]} flexWrap="wrap" spacing={3}>
          {listing.map((item, i) => (
            <ListItem
              display="flex"
              pb="1.5"
              alignItems="center"
              mt="0 !important"
              w={["50%", null, "full"]}
              fontWeight="medium"
              key={i}
            >
              <ListIcon fontSize={["lg", null, "xl"]} as={item.IconList} color="pri.600" />
              <Text fontSize={["sm", null, "md"]}>{item.label}</Text>
            </ListItem>
          ))}
        </List>
      </PrimaryCard>
    </GridItem>
  );
};

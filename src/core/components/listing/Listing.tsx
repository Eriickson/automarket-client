import { List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import React, { FC } from "react";

export interface IListing {
  label: string;
  IconList: FC;
}

export interface ListingProps {
  listing: IListing[];
}

export const Listing: FC<ListingProps> = ({ listing }) => {
  return (
    <List display={["flex", null, "block"]} flexWrap="wrap" spacing={3}>
      {listing.map((item, i) => (
        <ListItem
          alignItems="center"
          display="flex"
          fontWeight="medium"
          key={i}
          mt="0 !important"
          pb="1.5"
          w={["50%", null, "full"]}
        >
          <ListIcon as={item.IconList} color="pri.600" fontSize={["lg", null, "xl"]} />
          <Text fontSize={["sm", null, "md"]}>{item.label}</Text>
        </ListItem>
      ))}
    </List>
  );
};

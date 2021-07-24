import React, { FC } from "react";
import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Divider,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Home } from "react-feather";
import styled from "@emotion/styled";
import { IconChevronLeft } from "@tabler/icons";
import { IBreadcrumb } from "@/shared";

const WraperBreadcrumbStyled = styled.div`
  ol.chakra-breadcrumb__list {
    display: flex;
  }
`;

interface BreadcrumbProps {
  items: IBreadcrumb[];
}

export const Breadcrumb: FC<BreadcrumbProps> = ({ items }) => {
  return (
    <WraperBreadcrumbStyled>
      <Container alignItems="center" display="flex">
        <Button alignItems="center" display="flex" h="max-content" leftIcon={<IconChevronLeft />} variant="unstyled">
          Volver
        </Button>
        <Divider borderColor="gray.700" h="3.5" mx="4" orientation="vertical" />
        <ChakraBreadcrumb overflow="auto" separator={<ChevronRightIcon color="gray.500" />} spacing="8px">
          <BreadcrumbItem>
            <BreadcrumbLink href="#">
              <Home height="1.25rem" width="1.25rem" />
            </BreadcrumbLink>
          </BreadcrumbItem>
          {items.map((item, i) => (
            <BreadcrumbItem isCurrentPage={item.isCurrentPage} key={i}>
              <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
            </BreadcrumbItem>
          ))}
        </ChakraBreadcrumb>
      </Container>
    </WraperBreadcrumbStyled>
  );
};

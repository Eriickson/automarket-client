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

const WraperBreadcrumbStyled = styled.div`
  ol.chakra-breadcrumb__list {
    display: flex;
  }
`;

export const Breadcrumb: FC = () => {
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
          <BreadcrumbItem>
            <BreadcrumbLink href="#">About</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Contact</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">About</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Contact</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">About</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Contact</BreadcrumbLink>
          </BreadcrumbItem>
        </ChakraBreadcrumb>
      </Container>
    </WraperBreadcrumbStyled>
  );
};

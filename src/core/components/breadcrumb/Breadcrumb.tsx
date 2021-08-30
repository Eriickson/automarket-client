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
import { Breadcrumbs } from "@/shared";
import { getBreadcrumbs } from "src/core/templates/index/breadcrumbs";

const WraperBreadcrumbStyled = styled.div`
  ol.chakra-breadcrumb__list {
    display: flex;
  }
`;

/* eslint-disable-next-line */
interface BreadcrumbProps extends Breadcrumbs {}

export const Breadcrumb: FC<BreadcrumbProps> = (/* { items } */) => {
  const { back, items, home } = getBreadcrumbs();
  return (
    <WraperBreadcrumbStyled>
      <Container alignItems="center" display="flex">
        {back && (
          <>
            <Button
              alignItems="center"
              display="flex"
              h="max-content"
              leftIcon={<IconChevronLeft />}
              variant="unstyled"
            >
              Volver
            </Button>
            <Divider borderColor="gray.700" h="3.5" mx="4" orientation="vertical" />
          </>
        )}
        <ChakraBreadcrumb overflow="auto" separator={<ChevronRightIcon color="gray.500" />} spacing="8px">
          {home && (
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                <Home height="1.25rem" width="1.25rem" />
              </BreadcrumbLink>
            </BreadcrumbItem>
          )}
          {items?.map((item, i) => (
            <BreadcrumbItem isCurrentPage={item.isCurrencyPage} key={i}>
              <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
            </BreadcrumbItem>
          ))}
        </ChakraBreadcrumb>
      </Container>
    </WraperBreadcrumbStyled>
  );
};

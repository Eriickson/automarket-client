import { Plan } from "@/shared";
import React, { FC } from "react";
import { Box, chakra, Text, GridItem, VStack, List, ListItem, ListIcon, SimpleGrid } from "@chakra-ui/react";
import { PrimaryCard } from "@/components";
import numeral from "numeral";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { PurchasePlanModal } from "./PurchasePlanModal";
import { useSelector } from "@/store";
import { SelectedPlanModal } from "./selectedPlanModal";

interface PlanListProps {
  plans: Plan[];
  duration: string;
  percentage: number;
}

export const PlanList: FC<PlanListProps> = ({ plans, duration, percentage }) => {
  const { plan: currentPlan } = useSelector(({ auth }) => auth);

  return (
    <SimpleGrid columns={[12, null, null, null, 10]} gap={2}>
      {plans
        .filter(({ name }) => name !== "free")
        .map(plan => (
          <GridItem colSpan={[12, null, 6, 4, 2]} key={plan.id}>
            <Box>
              <PrimaryCard>
                <VStack alignItems="stretch" spacing={5}>
                  <Box>
                    <Text fontFamily="mono" fontSize="2xl" fontWeight="semibold" textTransform="capitalize">
                      {plan.name}
                    </Text>
                    <Text color="gray.500" fontSize="sm" lineHeight="normal">
                      {plan.description}
                    </Text>
                  </Box>
                  <Box>
                    <Text>
                      <chakra.span fontSize="3xl" fontWeight="bold" letterSpacing="-1px">
                        $
                        {numeral(
                          duration === "yearly" ? plan.pricing - plan.pricing * (percentage / 100) : plan.pricing,
                        ).format("0,0.00")}
                      </chakra.span>
                      /mes
                    </Text>
                  </Box>
                  <Box>
                    <Text color="gray.500" fontWeight="medium">
                      Que está incluido en este plan?
                    </Text>
                    <List fontSize="sm">
                      <ListItem fontWeight="medium">
                        <ListIcon as={CheckCircleIcon} color="pri.500" />
                        Hasta{" "}
                        <chakra.span color="pri.600" textDecoration="underline">
                          {plan.benefits.posts} Publicaciones
                        </chakra.span>
                      </ListItem>
                      <ListItem fontWeight="medium">
                        <ListIcon as={CheckCircleIcon} color="pri.500" />
                        Tendrás hasta
                        <chakra.span color="pri.600" textDecoration="underline">
                          {" "}
                          {plan.benefits.branches} sucursales
                        </chakra.span>
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckCircleIcon} color="pri.500" />
                        <chakra.span fontWeight="medium">
                          Sube{" "}
                          <chakra.span color="pri.600" textDecoration="underline">
                            {plan.benefits.images} imágenes
                          </chakra.span>{" "}
                          por publicación
                        </chakra.span>
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckCircleIcon} color="pri.500" />
                        <chakra.span fontWeight="medium">
                          Posibilidad de tener{" "}
                          <chakra.span color="pri.600" textDecoration="underline">
                            {plan.benefits.imageCoverProfile} portadas
                          </chakra.span>
                        </chakra.span>
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckCircleIcon} color="pri.500" />
                        <chakra.span fontWeight="medium">Futuras características venideras</chakra.span>
                      </ListItem>
                    </List>
                  </Box>
                  {currentPlan?.id === plan.id ? <SelectedPlanModal plan={plan} /> : <PurchasePlanModal plan={plan} />}
                </VStack>
              </PrimaryCard>
            </Box>
          </GridItem>
        ))}
    </SimpleGrid>
  );
};

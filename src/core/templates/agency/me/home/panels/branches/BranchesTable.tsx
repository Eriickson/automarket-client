import React from "react";
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, Text, Box } from "@chakra-ui/react";
import { useSelector } from "@/store";
import { IconCheck, IconCheckbox, IconStar } from "@tabler/icons";

export const BranchesTable = () => {
  const { branches } = useSelector(({ agency }) => agency.myAgency);
  const { selectedBranch } = useSelector(({ auth }) => auth);
  return (
    <div>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>Nombre</Th>
            <Th>Publicaciones</Th>
            <Th>Dirección</Th>
            <Th isNumeric>Visitas</Th>
          </Tr>
        </Thead>
        <Tbody>
          {branches.map(branch => (
            <Tr key={branch.id}>
              <Td>
                <Text
                  alignItems="center"
                  display="flex"
                  fontWeight={branch.id === selectedBranch?.id ? "semibold" : "normal"}
                >
                  {branch.name}
                  {branch.isSede && (
                    <Box
                      alignItems="center"
                      bgColor="pri.100"
                      color="pri.500"
                      display="flex"
                      h="6"
                      justifyContent="center"
                      ml="1"
                      rounded="sm"
                      w="6"
                    >
                      <IconStar size="1rem" />
                    </Box>
                  )}
                  {branch.id === selectedBranch?.id && (
                    <Box
                      alignItems="center"
                      bgColor="pri.100"
                      color="pri.500"
                      display="flex"
                      h="6"
                      justifyContent="center"
                      ml="1"
                      rounded="sm"
                      w="6"
                    >
                      <IconCheck size="1rem" />
                    </Box>
                  )}
                </Text>
              </Td>
              <Td>0</Td>
              <Td>
                {branch.ubication.direction.municipality.label}, {branch.ubication.direction.province.label}
              </Td>
              <Td isNumeric>0</Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Nombre</Th>
            <Th>Publicaciones</Th>
            <Th>Dirección</Th>
            <Th isNumeric>Visitas</Th>
          </Tr>
        </Tfoot>
      </Table>
    </div>
  );
};

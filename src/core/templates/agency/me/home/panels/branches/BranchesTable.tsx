import React from "react";
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption } from "@chakra-ui/react";
import { useSelector } from "@/store";

export const BranchesTable = () => {
  const { branches } = useSelector(({ agency }) => agency.myAgency);
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
              <Td>{branch.name}</Td>
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

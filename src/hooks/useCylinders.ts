import { Option } from "@/shared";
import { useState } from "react";

export function useCylinders(): { cylinders: Option[] } {
  const [cylinders] = useState<Option[]>([
    {
      label: "1",
      id: 1,
    },
    {
      label: "2",
      id: 2,
    },
    {
      label: "3",
      id: 3,
    },
    {
      label: "4",
      id: 4,
    },
    {
      label: "5",
      id: 5,
    },
    {
      label: "6",
      id: 6,
    },
    {
      label: "7",
      id: 7,
    },
    {
      label: "8",
      id: 8,
    },
    {
      label: "9",
      id: 9,
    },
    {
      label: "10",
      id: 10,
    },
    {
      label: "11",
      id: 11,
    },
    {
      label: "12",
      id: 12,
    },
  ]);

  return { cylinders };
}

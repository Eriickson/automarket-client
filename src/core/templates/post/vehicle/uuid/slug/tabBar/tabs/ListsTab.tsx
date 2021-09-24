import { SimpleGrid } from "@chakra-ui/layout";
import { IconCircleCheck, IconCirclePlus, IconMarquee2, IconStars } from "@tabler/icons";
import React, { FC } from "react";
import { PanelListing } from "../../panels";

export const ListsTab: FC = () => {
  return (
    <div>
      <SimpleGrid columns={12} gap={2}>
        <PanelListing
          listing={[
            { IconList: IconMarquee2, label: "Nuevo" },
            { IconList: IconMarquee2, label: "Recien importado" },
            { IconList: IconMarquee2, label: "Aire Acondicionador" },
            { IconList: IconMarquee2, label: "No se Moja" },
          ]}
          title="Características"
        />
        <PanelListing
          listing={[
            { IconList: IconCircleCheck, label: "Nuevo" },
            { IconList: IconCircleCheck, label: "Recien importado" },
            { IconList: IconCircleCheck, label: "Aire Acondicionador" },
            { IconList: IconCircleCheck, label: "No se Moja" },
          ]}
          title="Accesorios"
        />
        <PanelListing
          listing={[
            { IconList: IconCirclePlus, label: "Nuevo" },
            { IconList: IconCirclePlus, label: "Recien importado" },
            { IconList: IconCirclePlus, label: "Aire Acondicionador" },
            { IconList: IconCirclePlus, label: "No se Moja" },
          ]}
          title="Añadidos"
        />
        <PanelListing
          listing={[
            { IconList: IconStars, label: "Nuevo" },
            { IconList: IconStars, label: "Recien importado" },
            { IconList: IconStars, label: "Aire Acondicionador" },
            { IconList: IconStars, label: "No se Moja" },
          ]}
          title="Puntuaciones"
        />
      </SimpleGrid>
    </div>
  );
};

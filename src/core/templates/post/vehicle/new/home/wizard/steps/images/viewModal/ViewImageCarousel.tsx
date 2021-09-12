import React, { FC } from "react";

// Packages
import { Swiper, SwiperSlide } from "swiper/react";
import { Img } from "@chakra-ui/image";

// My Elements
import { useSelector } from "@/store";

export const ViewImageCarousel: FC = () => {
  const { images } = useSelector(store => store.newVehicle.steps.images);
  return (
    <div>
      <Swiper autoHeight spaceBetween={10}>
        {images.map(image => (
          <SwiperSlide key={image.id}>
            <Img alt="" src={image.src} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

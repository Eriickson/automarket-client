import { PrimaryCard } from "@/components";
import { Heading, Img } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";


export const MorePost = () => {
  return (
    <PrimaryCard notBorderTop>
      <Heading mb="3" fontSize={["md", null, "lg"]}>
        Más publicaciones
      </Heading>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => console.log(swiper)}
      >
        {Array(10)
          .fill(0)
          .map((item, i) => (
            <SwiperSlide key={i}>
              <Img
                alt="x"
                cursor="pointer"
                rounded="sm"
                src="https://uhdwallpapers.org/uploads/converted/19/01/13/mercedes-benz-cla-250-amg-1920x1080_578865-mm-90.jpg"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </PrimaryCard>
  );
};

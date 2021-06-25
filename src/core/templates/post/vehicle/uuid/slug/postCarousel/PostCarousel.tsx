import React, { FC, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs, Pagination, EffectCoverflow } from "swiper/core";
import { Box, Img } from "@chakra-ui/react";

SwiperCore.use([Thumbs, Navigation, EffectCoverflow, Pagination]);

export const PostCarousel: FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();

  return (
    <Box bg="white" shadow="sm">
      <Box mb="2">
        <Swiper
          centeredSlides
          grabCursor
          navigation
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: true,
          }}
          effect="coverflow"
          pagination={{
            dynamicBullets: true,
          }}
          slidesPerView={"auto"}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
            <SwiperSlide key={item}>
              <Img
                alt="x"
                rounded="sm"
                src="https://uhdwallpapers.org/uploads/converted/19/01/13/mercedes-benz-cla-250-amg-1920x1080_578865-mm-90.jpg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box bg="gray.900" px="1.5" py="3">
        <Swiper watchSlidesProgress watchSlidesVisibility slidesPerView={5} spaceBetween={8} onSwiper={setThumbsSwiper}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
            <SwiperSlide key={item}>
              <Img
                alt="x"
                cursor="pointer"
                rounded="sm"
                src="https://uhdwallpapers.org/uploads/converted/19/01/13/mercedes-benz-cla-250-amg-1920x1080_578865-mm-90.jpg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};
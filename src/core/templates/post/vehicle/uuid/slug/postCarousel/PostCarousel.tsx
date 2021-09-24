import React, { FC, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs, Pagination, EffectCoverflow } from "swiper/core";
import { Box, Img, Tag } from "@chakra-ui/react";

SwiperCore.use([Thumbs, Navigation, EffectCoverflow, Pagination]);

export const PostCarousel: FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();

  return (
    <Box bg="white" shadow="sm">
      <Box mb="2" position="relative">
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
                userSelect="none"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Tag
          bgColor="gray.600"
          bottom="3"
          color="white"
          fontWeight="semibold"
          left="3"
          position="absolute"
          size="lg"
          zIndex="10"
        >
          9/10
        </Tag>
      </Box>
      <Box bg="gray.900" px="1.5" py={[1, null, 3]}>
        <Swiper
          watchSlidesProgress
          watchSlidesVisibility
          breakpoints={{
            645: {
              slidesPerView: 4,
            },
            796: {
              slidesPerView: 5,
            },
          }}
          loop={true}
          loopFillGroupWithBlank={true}
          slidesPerGroup={3}
          slidesPerView={3}
          spaceBetween={8}
          onSwiper={setThumbsSwiper}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
            <SwiperSlide key={item}>
              <Img
                alt="x"
                cursor="pointer"
                rounded="sm"
                src="https://uhdwallpapers.org/uploads/converted/19/01/13/mercedes-benz-cla-250-amg-1920x1080_578865-mm-90.jpg"
                userSelect="none"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

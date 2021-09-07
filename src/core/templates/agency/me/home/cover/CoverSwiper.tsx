import { PrimaryCard } from "@/components";
import { Img } from "@chakra-ui/image";
import { VStack } from "@chakra-ui/layout";
import React, { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export const CoverSwiper: FC = () => {
  const [swiperSlide] = useState([
    {
      imageUrl:
        "https://media-exp1.licdn.com/dms/image/C4E1BAQHApvoBrLTqGA/company-background_10000/0?e=2159024400&v=beta&t=7x5V55U5mxMIMNePSB-TiPt3OdigvrE5tgwrbBQkW-k",
    },
    {
      imageUrl: "https://blog.nomadcredit.com/wp-content/uploads/2017/12/meik-schneider-321596-1500x500.jpg",
    },
    {
      imageUrl: "https://imageinationapp.weebly.com/uploads/6/0/3/8/60386271/csc3.jpg",
    },
    {
      imageUrl:
        "https://media.assets.sincrod.com/websites/content/cblt-ms-nissan//4db825ecb72943b8ad53cf6b8331b61f_1500x500.jpg",
    },
  ]);
  return (
    <VStack alignItems="stretch">
      <PrimaryCard />
      <Swiper autoplay={{ pauseOnMouseEnter: true, delay: 2500 }} slidesPerView={1} spaceBetween={50}>
        {swiperSlide.map((item, i) => (
          <SwiperSlide key={i}>
            <Img src={item.imageUrl} />
          </SwiperSlide>
        ))}
      </Swiper>
    </VStack>
  );
};

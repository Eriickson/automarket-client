import { Img } from "@chakra-ui/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export const CoverSwiper = () => {
  const [swiperSlide, setSwiperSlide] = useState([
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
    <div>
      <Swiper
        autoplay={{ pauseOnMouseEnter: true, delay: 2500 }}
        slidesPerView={1}
        spaceBetween={50}
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => console.log(swiper)}
      >
        {swiperSlide.map((item, i) => (
          <SwiperSlide key={i}>
            <Img src={item.imageUrl} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

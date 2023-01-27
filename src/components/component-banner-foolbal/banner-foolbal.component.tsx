import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Itemfoolbalcomponent } from "../component-item-foolball";
import "./banner-foolball.scss";
import gifBethot from "../../assets/img/img-foolball/gif-bet-hot.gif";

const classNamePrefix = "hotmatch";
export default function Bannerfoolbalcomponent() {
  return (
    <div className={`${classNamePrefix} wapper`}>
      <div className={`${classNamePrefix}__header`}>
        <div className={`${classNamePrefix}__title`}>
          <h2>CÁC TRẬN ĐẤU NỔI BẬT</h2>
        </div>
        <div className={`${classNamePrefix}__button`}>
          <img src={gifBethot} alt="gif"></img>
          <span>Kèo hot</span>
          <i className="fa-solid fa-angles-right"></i>
        </div>
      </div>

      <Swiper
        effect={"cube"}
        grabCursor={true}
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        navigation={true}
        modules={[Navigation]}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        className={" hotmatch__slide"}
      >
        <SwiperSlide>
          <Itemfoolbalcomponent />
        </SwiperSlide>

        <SwiperSlide>
          <Itemfoolbalcomponent />
        </SwiperSlide>

        <SwiperSlide>
          <Itemfoolbalcomponent />
        </SwiperSlide>

        <SwiperSlide>
          <Itemfoolbalcomponent />
        </SwiperSlide>
        <SwiperSlide>
          <Itemfoolbalcomponent />
        </SwiperSlide>

        <SwiperSlide>
          <Itemfoolbalcomponent />
        </SwiperSlide>

        <SwiperSlide>
          <Itemfoolbalcomponent />
        </SwiperSlide>

        <SwiperSlide>
          <Itemfoolbalcomponent />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

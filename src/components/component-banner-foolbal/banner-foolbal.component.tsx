import React from "react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import { Itemfoolbalcomponent } from "../component-item-foolball";
import "./banner-foolball.scss";
import gifBethot from "../../assets/img/img-foolball/gif-bet-hot.gif";

const classNamePrefix = "hotmatch";
const SwiperButtonNext = ({ children }: any) => {
  const swiper = useSwiper();
  return (
    <div className={`${classNamePrefix}__next`} onClick={() => swiper.slideNext()} id="next">
      <img
        src="https://t1.ta88.com/img/assets/images/components/desktop/pages/home/hot-match/img-btn-prev-active.png"
        alt=""
      />
    </div>
  );
};

const SwiperButtonPrev = ({ children }: any) => {
  const swiper = useSwiper();
  return (
    <div className={`${classNamePrefix}__prev`} onClick={() => swiper.slidePrev()} id="prev">
      <img
        src="https://t1.ta88.com/img/assets/images/components/desktop/pages/home/hot-match/img-btn-next-active.png"
        alt=""
      />
    </div>
  );
};
export default function Bannerfoolbalcomponent() {
  
  
  return (
    <div className={`${classNamePrefix} wapper`}>
      <div className={`${classNamePrefix}__header`}>
        <div className={`${classNamePrefix}__title`}>
          <h2>CÁC TRẬN ĐẤU NỔI BẬT</h2>
        </div>
        <div className={`${classNamePrefix}__button`}>
          <img src={gifBethot} alt="gif"></img>
          <span>Kèo hot </span>
          <i className="fa-solid fa-angles-right"></i>
        </div>
      </div>

      <Swiper
        effect={"cube"}
        grabCursor={true}
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        // navigation={true}
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
        <SwiperButtonNext> </SwiperButtonNext>
        <SwiperButtonPrev></SwiperButtonPrev>
      </Swiper>
      <div className={`${classNamePrefix}__next`}  id="next">
        <img
          src="https://t1.ta88.com/img/assets/images/components/desktop/pages/home/hot-match/img-btn-prev-active.png"
          alt=""
        />
      </div>
      <div className={`${classNamePrefix}__prev`} id="prev">
        <img
          src="https://t1.ta88.com/img/assets/images/components/desktop/pages/home/hot-match/img-btn-next-active.png"
          alt=""
        />
      </div>
    </div>
  );
}

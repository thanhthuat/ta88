import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "./promotion-slide.scss";
// import sc from '../../assets/img/img-caroses/'
import logo1 from "../../assets/img/img-hotnew/thumb-km.webp";
import logo2 from "../../assets/img/img-hotnew/thumb-promo.webp";
import logo3 from "../../assets/img/img-hotnew/bonus-return-15.webp";
import logo4 from "../../assets/img/img-caroses/vgaming-pc.webp";
const classNamePrefix = "promotionslide";
const arrbanner = [{ src: logo1 }, { src: logo2 }, { src: logo3 }];
function Promotionslidecomponent() {
  return (
    <Swiper
    effect={"cube"}
    grabCursor={true}
    cubeEffect={{
      shadow: true,
      slideShadows: true,
    //   shadowOffset: 20,
    //   shadowScale: 0.94,
    }}
    pagination={{
      clickable: true,
    }}
    modules={[Autoplay, Pagination, Navigation]}
    className={classNamePrefix}
  >
    {arrbanner.map((item) => {
      return (
        <SwiperSlide>
          <div className={`${classNamePrefix}__item`}>
            <img className={`${classNamePrefix}__image`} src={item.src} alt="item.src"></img>
            <div className={`${classNamePrefix}__title`}>
                <span> CHI TIẾT CHƯƠNG TRÌNH </span>
            </div>
          </div>
        </SwiperSlide>
      );
    })}
  </Swiper>
  )
}

export default Promotionslidecomponent
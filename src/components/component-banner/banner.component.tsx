import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "./banner.scss";
// import sc from '../../assets/img/img-caroses/'
import logo1 from "../../assets/img/img-caroses/hero-banner-pc.webp";
import logo2 from "../../assets/img/img-caroses/img-hr_home-pc1.webp";
import logo3 from "../../assets/img/img-caroses/kèo_hot-pc.webp";
import logo4 from "../../assets/img/img-caroses/vgaming-pc.webp";
const classNamePrefix = "banner";
const arrbanner = [{ src: logo1 }, { src: logo2 }, { src: logo3 }, { src: logo4 }];
function Bannercomponent() {
  return (
    <div>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
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
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Bannercomponent;

import React from "react";
import "./partner.scss";
import img from "../../assets/img/img-partner/cq9.webp";
import img0 from "../../assets/img/img-partner/ebet.webp";
import img1 from "../../assets/img/img-partner/hogaming.webp";
import img2 from "../../assets/img/img-partner/jdb.webp";
import img3 from "../../assets/img/img-partner/playgo.webp";
import img4 from "../../assets/img/img-partner/pragmatic.webp";
import img5 from "../../assets/img/img-partner/Spinomenal.webp";
import img6 from "../../assets/img/img-partner/techplay.webp";
import img7 from "../../assets/img/img-partner/vivo-gaming.webp";
import img8 from "../../assets/img/img-partner/wazdan.webp";
import img9 from "../../assets/img/img-partner/evolution.webp";

type Props = {};
const classNamePrefix = "partner";
const arr = [
  { src: img9 },
  { src: img },
  { src: img8 },
  { src: img2 },
  { src: img7 },
  { src: img0 },
  { src: img1 },
  { src: img5 },
  { src: img6 },
  { src: img4 },
  { src: img3 },
];
function Partnercomponent({}: Props) {
  return (
    <div className={`${classNamePrefix}`}>
      <div className={`${classNamePrefix}__content wapper`}>
        <div className={`${classNamePrefix}__header`}>
          <div className={`${classNamePrefix}__title`}>
            <h3>TỰ HÀO LÀ ĐỐI TÁC CỦA HƠN 10 NHÀ CUNG CẤP HÀNG ĐẦU KHU VỰC</h3>
          </div>
        </div>
        <div className={`${classNamePrefix}__body`}>
          {arr.map((item) => {
            return (
              <div className={`${classNamePrefix}__item`}>
                <img className={`${classNamePrefix}__item-img`} src={item.src} alt={item.src} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Partnercomponent;

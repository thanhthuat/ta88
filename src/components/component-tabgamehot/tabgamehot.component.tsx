import React from "react";


import img from "../../assets/img/img-gamehot/bau_cua.webp";
import img1 from "../../assets/img/img-gamehot/img-ingame-baccarat@2x.webp";
import img2 from "../../assets/img/img-gamehot/tai_siu_sanh_rong.webp";
import img3 from "../../assets/img/img-gamehot/tai_xiu.webp";
import img4 from "../../assets/img/img-gamehot/Techpay-sanhudaiduong.webp";
import img5 from "../../assets/img/img-gamehot/tien_len_mien_nam.webp";
import img6 from "../../assets/img/img-gamehot/tu_linh.webp";
import img7 from "../../assets/img/img-gamehot/xoc_dia.webp";
import "./tabgamehot.scss";
type Props = {};

const classNamePrefix = "tabgamehot";
const arr = [
  { src: img },
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
  { src: img6 },
  { src: img7 },
];
function Tabgamehotcomponent({}: Props) {
  return (
    <div className={`${classNamePrefix}`}>
      <div className={`${classNamePrefix}__header`}>
        <span className={`${classNamePrefix}__header-item`}>GAME HOT</span>
        <span className={`${classNamePrefix}__header-item`}>HŨ SẮP NỔ</span>
        <span className={`${classNamePrefix}__header-item`}>BẮN CÁ HẤP DẪN</span>
        <span className={`${classNamePrefix}__header-item`}>LÔ ĐỀ TRỰC TIẾP</span>
      </div>
      <div className={`${classNamePrefix}__content`}>
        {arr.map((item) => {
          return (
            <div className={`${classNamePrefix}__item`} key={item.src}>
              <img src={item.src} alt="" />
              <div className={`${classNamePrefix}__title`} >
                <div className={`${classNamePrefix}__title-coin`}>Baccarat Lucky 88</div>
                <div className={`${classNamePrefix}__title-name`}>Baccarat Lucky 88</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tabgamehotcomponent;

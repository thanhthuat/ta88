import React from "react";

import img from "../../assets/img/img-header/logo (1).webp";
import img1 from "../../assets/img/img-header/ico-bell.webp";
import img2 from "../../assets/img/img-header/img-menu-sprites-v2.webp";
import "./navigation.scss";
type Props = {};

const classNamePrefix = "navigation";
function Navcomponent({}: Props) {
  return (
    <div className={`${classNamePrefix}`}>
      <div className={`${classNamePrefix}__content wapper`}>
        <div className={`${classNamePrefix}__logo`}>
          <img src={img} alt="" />
        </div>
        <div className={`${classNamePrefix}__body`}>
          <ul className={`${classNamePrefix}__menu`}>
            <li className={`${classNamePrefix}__item dropdown1`}>
              <img className={`${classNamePrefix}__item-img`} src={img2} alt="" />
              THỂ THAO <i className="fa-solid fa-chevron-down"></i>
            </li>
            <li className={`${classNamePrefix}__item`}>
              <img className={`${classNamePrefix}__item-img1`} src={img2} alt="" />
              NỔ HŨ
            </li>
            <li className={`${classNamePrefix}__item`}>
              <img className={`${classNamePrefix}__item-img2`} src={img2} alt="" />
              INGAME
            </li>
            <li className={`${classNamePrefix}__item`}>
              <img className={`${classNamePrefix}__item-img3`} src={img2} alt="" />
              LIVE CASINO
            </li>
            <li className={`${classNamePrefix}__item`}>
              <img className={`${classNamePrefix}__item-img4`} src={img2} alt="" />
              GAME BÀI
            </li>
            <li className={`${classNamePrefix}__item  dropdown2`}>
            <img className={`${classNamePrefix}__item-img5`} src={img2} alt="" />
              CỔNG GAMES <i className="fa-solid fa-chevron-down"></i>
            </li>
            <li className={`${classNamePrefix}__item  dropdown3`}>
            <img className={`${classNamePrefix}__item-img6`} src={img2} alt="" />
              LÔ ĐỀ <i className="fa-solid fa-chevron-down"></i>
            </li>
            <div className={`${classNamePrefix}__dropdown1`}>
              <ul className={`${classNamePrefix}__dropdown1-content`}>
                <li className={`${classNamePrefix}__dropdown1-item`}>Kèo hot</li>
                <li className={`${classNamePrefix}__dropdown1-item`}>Thể Thao</li>
                <li className={`${classNamePrefix}__dropdown1-item`}>Thể Thao Ảo</li>
                <li className={`${classNamePrefix}__dropdown1-item`}>E-Sports</li>
              </ul>
            </div>
            <div className={`${classNamePrefix}__dropdown2`}>
              <ul className={`${classNamePrefix}__dropdown1-content`}>
                <li className={`${classNamePrefix}__dropdown1-item`}>Bắn Cá</li>
                <li className={`${classNamePrefix}__dropdown1-item`}>In-Game</li>
                <li className={`${classNamePrefix}__dropdown1-item`}>Nổ Hũ</li>
                <li className={`${classNamePrefix}__dropdown1-item`}>Slots</li>
                <li className={`${classNamePrefix}__dropdown1-item`}>Keno, Quay Số</li>
                <li className={`${classNamePrefix}__dropdown1-item`}>NEW</li>
                <li className={`${classNamePrefix}__dropdown1-item`}>V-Gaming</li>
                <li className={`${classNamePrefix}__dropdown1-item`}>Game Nhanh</li>
                <li className={`${classNamePrefix}__dropdown1-item`}>Table Games</li>
              </ul>
            </div>
            <div className={`${classNamePrefix}__dropdown3`}>
              <ul className={`${classNamePrefix}__dropdown1-content`}>
                <li className={`${classNamePrefix}__dropdown1-item`}>Lô Đề 3 Miền</li>
                <li className={`${classNamePrefix}__dropdown1-item`}>Lô Đề Siêu Tốc</li>
              </ul>
            </div>
          </ul>

          <div className={`${classNamePrefix}__dropdown2`}></div>
          <div className={`${classNamePrefix}__dropdown3`}></div>
        </div>
        <div className={`${classNamePrefix}__user`}>
          <div className={`${classNamePrefix}__bell`}>
            <img src={img1} alt="" />
          </div>
          <button className={`${classNamePrefix}__singin`}>
            {" "}
            <span> ĐĂNG NHẬP</span>
          </button>
          <button className={`${classNamePrefix}__singinup`}>
            <span>ĐĂNG KÝ</span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navcomponent;

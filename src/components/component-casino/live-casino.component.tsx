import React from "react";

import "./livecasino.scss";
import img from "../../assets/img/img-livecasino/e-provider-v2.webp";
import img1 from "../../assets/img/img-livecasino/evo-provider-v2.webp";
import img2 from "../../assets/img/img-livecasino/ho-provider-v2.webp";
import img3 from "../../assets/img/img-livecasino/prag-provider-v2.webp";
import img4 from "../../assets/img/img-livecasino/vi-provider-v2.webp";

import btn from "../../assets/img/img-livecasino/btn-allbet.png";
import btn1 from "../../assets/img/img-livecasino/btn-ebet.png";
import btn2 from "../../assets/img/img-livecasino/btn-evolution.png";
import btn3 from "../../assets/img/img-livecasino/btn-mg.png";
import btn4 from "../../assets/img/img-livecasino/btn-pragmatic.png";
type Props = {};

const classNamePrefix = "livecasino";
const arr = [ { src: img1 ,btn:btn3 }, { src: img2 ,btn:btn2},{ src: img4,btn:btn},  { src: img ,btn:btn4},{ src: img3,btn:btn1 },];
function Livecasinocomponent({}: Props) {
  return (
    <div className={`${classNamePrefix} wapper`}>
      <div className={`${classNamePrefix}__header`}>
        <h5> LIVE CASINO</h5>
      </div>
      <div className={`${classNamePrefix}__content`}>
        {arr.map((item, index) => {
          return (
            <div className={`${classNamePrefix}__item`} key={index}>
              <img className={`${classNamePrefix}__item-img`} src={item.src} alt="" />
              <div  className={`${classNamePrefix}__item-btn`}>
                <img src={item.btn} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Livecasinocomponent;

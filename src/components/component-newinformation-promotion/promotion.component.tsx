import React from "react";
import Promotionslidecomponent from "../component-newinformation-promotion-slide/promotion-slide.component";
import img from "../../assets/img/img-hotnew/guide-deposit.webp";
import img1 from "../../assets/img/img-hotnew/guide-withdraw.webp";
import "./promotion.scss";
type Props = {};
const classNamePrefix = "promotion";
function Promotioncomponent({}: Props) {
  return (
    <div className={`${classNamePrefix}`}>
      <div className={`${classNamePrefix}__content`}>
        <div className={`${classNamePrefix}__top`}>
          <Promotionslidecomponent />
        </div>
        <div className={`${classNamePrefix}__bottom`}>
          <img className={`${classNamePrefix}__bottom-item`} src={img} alt="" />
          <img className={`${classNamePrefix}__bottom-item`} src={img1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Promotioncomponent;

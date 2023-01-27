import React from "react";
import img from "../../assets/img/img-alerttopgame/img-nohu-de_vuong_atlantis.webp";
import "./item-alertgamehot.scss";
type Props = {};
const classNamePrefix = "item-alertgamehot";
function Itemalertgamehot({}: Props) {
  return (
    <div className={`${classNamePrefix}`}>
      <div className={`${classNamePrefix}__avata`}>
        <img src={img} alt="" />
      </div>
      <div className={`${classNamePrefix}__content`}>
        <div className={`${classNamePrefix}__person`}>
          <span> dung**** </span>
        </div>
        <div className={`${classNamePrefix}__name`}>
          <span>Đế Vương Atlantis </span>
        </div>
        <div className={`${classNamePrefix}__price`}>
          <span> 5.026.680 VND</span>
        </div>
      </div>
    </div>
  );
}

export default Itemalertgamehot;

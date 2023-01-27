import React from "react";
import img from "../../assets/img/img-gamehot/img-topnohu.webp";
import Itemalertgamehot from "../component-item-alertgamehot/item-alertgamehot.component";
import "./alertgamehot.scss";
type Props = {};

const classNamePrefix = "alertgamehot";
function Alertgamehotcomponent({}: Props) {
  return (
    <div className={`${classNamePrefix}`}>
      <div className={`${classNamePrefix}__header`}>
        <img src={img} alt="" />
        <ul className={`${classNamePrefix}__tab`}>
          <li className={`${classNamePrefix}__tab-item tab-active`}>Mới nhất</li>
          <li className={`${classNamePrefix}__tab-item`}>Top tuần</li>
          <li className={`${classNamePrefix}__tab-item`}>Top tháng</li>
        </ul>
      </div>
      <div className={`${classNamePrefix}__content`}>
        <div className={`${classNamePrefix}__top`}>
          <Itemalertgamehot />
          <Itemalertgamehot />
          <Itemalertgamehot />
          <Itemalertgamehot />
          <Itemalertgamehot />
          <Itemalertgamehot />
          <Itemalertgamehot />
          <Itemalertgamehot />
          <Itemalertgamehot />
          <Itemalertgamehot />
          <Itemalertgamehot />
          <Itemalertgamehot />
        </div>
      </div>
    </div>
  );
}

export default Alertgamehotcomponent;

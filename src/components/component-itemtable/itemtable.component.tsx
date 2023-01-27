import React from "react";
import "./itemtable.scss";
import img from "../../assets/img/img-table/avatar-6.webp";
import img1 from "../../assets/img/img-table/ico-vip-2.webp";
type Props = {};

const classNamePrefix = "itemtable";
function Itemtablecomponent({}: Props) {
  return (
    <div className={`${classNamePrefix}`}>
      <div className={`${classNamePrefix}__item rank`}> 1</div>
      <div className={`${classNamePrefix}__item user`}>
        <img src={img} alt="" />
        <span> THAY****</span>
      </div>
      <div className={`${classNamePrefix}__item vip`}>
        <img src={img1} alt="" />
        <span> Vip</span>
      </div>
      <div className={`${classNamePrefix}__item point`}>
        {" "}
        <span>6.392.807 Điểm</span>{" "}
      </div>
      <div className={`${classNamePrefix}__item money`}>
        {" "}
        <span> 40.000.000 VND</span>
      </div>
    </div>
  );
}

export default Itemtablecomponent;

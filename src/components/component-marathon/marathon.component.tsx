import React from "react";
import logo5 from "../../assets/img/img-marathon/entry-point-marathon.webp";
import logo0 from "../../assets/img/img-marathon/img-code-50k.webp";
import logo1 from "../../assets/img/img-marathon/img-promotion-100.webp";
import logo2 from "../../assets/img/img-marathon/img-promotion-100k.webp";
import logo3 from "../../assets/img/img-marathon/img-return-1.5.webp";
import logo4 from "../../assets/img/img-marathon/img-see-all-v2.webp";
import logo6 from "../../assets/img/img-marathon/img-the-bet-marathon.webp";
import logo7 from "../../assets/img/img-marathon/img-vip-club.webp";

import './marathon.scss';
type Props = {};
const classNamePrefix = "marathon";
function Marathoncomponent({}: Props) {
  return (
    <div className={`${classNamePrefix} wapper` }>
      <div className={`${classNamePrefix}__left`}>
        <img src={logo5} alt="" />

      </div>
      <div className={`${classNamePrefix}__right`}>
        <img src={logo0} alt="" />
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
        <img src={logo6} alt="" />
        <img src={logo7} alt="" />
      </div>
    </div>
  );
}

export default Marathoncomponent;

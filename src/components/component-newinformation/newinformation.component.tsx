import React from "react";
import Asidelecomponent from "../component-newinformation-asidle/asidele.component";
import Hotnewcomponent from "../component-newinformation-hotnew/hotnew.component";
import Promotioncomponent from "../component-newinformation-promotion/promotion.component";
import "./newinformation.scss";
type Props = {};
const classNamePrefix = "newinformation";
function Newinformationcomponent({}: Props) {
  return (
    <div className={`${classNamePrefix} wapper`}>
      <div className={`${classNamePrefix}__content `}>
        <div className={`${classNamePrefix}__header `}>
            <div  className={`${classNamePrefix}__header-item1`} > <h4 >TIN TỨC</h4></div>
            <div  className={`${classNamePrefix}__header-item`} > <h4 >KHUYẾN MÃI</h4></div>
           
        </div>
        <div className={`${classNamePrefix}__body `}>
          <Hotnewcomponent />
          <Asidelecomponent />
          <Promotioncomponent/>
        </div>
      </div>
    </div>
  );
}

export default Newinformationcomponent;

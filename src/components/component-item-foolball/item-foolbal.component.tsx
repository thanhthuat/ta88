import React from "react";
import logo4 from "../../assets/img/img-foolball/accrington.png";
import logo5 from "../../assets/img/img-foolball/accrington.png";
import img from "../../assets/img/img-foolball/ico-c-sport.svg";
import img1 from "../../assets/img/img-foolball/ico-k-sport.svg";
import "./itemfooball.scss";
type Props = {};
const classNamePrefix = "itemfoolbal";
function Itemfoolbalcomponent({}: Props) {
  return (
    <div className={`${classNamePrefix}`}>
      <div className={`${classNamePrefix}__head`}>
        <span className={`${classNamePrefix}__head`}>England Premier League </span>
      </div>
      <div className={`${classNamePrefix}__body`}>
        <div className={`${classNamePrefix}__itemlogo`}>
          <div className={`${classNamePrefix}__itemlogo-img`}>
            <img src={logo4} alt="" />
          </div>

          <div className={`${classNamePrefix}__itemlogo-time`}>
            <p>
              30/09 <br /> 00:3
            </p>
          </div>
          <div className={`${classNamePrefix}__itemlogo-img`}>
            <img src={logo5} alt="" />
          </div>
         
        </div>
        <div className={`${classNamePrefix}__itemtitle`}>
          <div>
            <span className={`${classNamePrefix}__itemtitle-text`}> kèo chấp</span>
          </div>
          <div>
            <span className={`${classNamePrefix}__itemtitle-text`}> kèo cược</span>
          </div>
        </div>
        <div className={`${classNamePrefix}__itemcontent`}>
          <div className={`${classNamePrefix}__itemcontent-text`}>
            <span className={`red`}>-0.9</span> <span>0.0</span> <span className={`green`}>0.86</span>
          </div>
          <div className={`${classNamePrefix}__itemcontent-button`}>
            <img src={img1} alt="" />
            <span>Cược</span>
          </div>
          <div className={`${classNamePrefix}__itemcontent-text`}>
            <span className={`red`}>-0.9</span> <span>0.0</span> <span className={`green`}>0.86</span>
          </div>
        </div>
        <div className={`${classNamePrefix}__itemcontent`}>
          <div className={`${classNamePrefix}__itemcontent-text`}>
            <span className={`red`}>-0.9</span> <span>0.0</span> <span className={`green`}>0.86</span>
          </div>
          <div className={`${classNamePrefix}__itemcontent-button1`}>
            <img src={img} alt="" />
            <span>Cược</span>
          </div>
          <div className={`${classNamePrefix}__itemcontent-text`}>
            <span className={`red`}>-0.9</span> <span>0.0</span> <span className={`green`}>0.86</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Itemfoolbalcomponent;

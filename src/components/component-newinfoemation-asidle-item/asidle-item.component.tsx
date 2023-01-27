import React from "react";
import { IasidleItem } from "./asidle-item.type";
import './asidle-item.scss';
const classNamePrefix = "asidleitem";
function Itemasidlecomponent({item}: IasidleItem) {
  return (
    <div className={`${classNamePrefix}`}>
      <div className={`${classNamePrefix}__content`}>
        <div className={`${classNamePrefix}__avata`}>
          <img src={item.src} alt="" />
        </div>
        <div className={`${classNamePrefix}__body`}>
          <div className={`${classNamePrefix}__body-title`}>
            <h4>{item.title}</h4>
          </div>
          <div className={`${classNamePrefix}__body-description`}>
            <p>{item.description}</p>{" "}
          </div>
          <div className={`${classNamePrefix}__body-time`}>
            <span> <i className="fa-regular fa-clock"></i> {item.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Itemasidlecomponent;

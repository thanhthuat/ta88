import React from "react";

import "./hotnew-item.scss";
import {IhotNewItem} from './hotnew-item.type'
const classNamePrefix = "hotnewitem";
function Hotnewitemcomponent({item}: IhotNewItem) {
  return (
    <div className={`${classNamePrefix}`}>
      <div className={`${classNamePrefix}__number`}>
        <p>{item.id}</p>
      </div>
      <div className={`${classNamePrefix}__content`}>
        <p> {item.title}</p>
      </div>
    </div>
  );
}

export default Hotnewitemcomponent;

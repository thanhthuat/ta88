import React from "react";
import Hotnewitemcomponent from "../component-newinformation-hotnew-item/hotnew-item.component";

import "./hotnew.scss";
type Props = {};
const arr = [
  { id: 1, title: "Soi kèo C1 là gì? Hướng dẫn cách soi kèo C1 chuẩn xác từ chuyên gia" },
  { id: 2, title: "Soi kèo nhà cái là gì? Bí quyết lựa chọn soi kèo nhà cái nào uy tín nhất" },
  { id: 3, title: "Cách soi kèo bóng đá ngoại hạng anh như thế nào chuẩn nhất?" },
  { id: 4, title: "Sân chơi soi kèo là gì?Top những nhà cái soi kèo uy tín nhất" },
  { id: 5, title: "Cược 1x2 là gì? Cách hiểu cược 1/2 bóng đá và mẹo chơi dễ thắng nhất" },
];
const classNamePrefix = "hotnew";
function Hotnewcomponent({}: Props) {
  return (
    <div className={`${classNamePrefix}`}>
      <div className={`${classNamePrefix}__content`}>
        <div className={`${classNamePrefix}__header`}>
          <div className={`${classNamePrefix}__title`}>HOT NEW</div>
          <div className={`${classNamePrefix}__tab`}>
            <ul className={`${classNamePrefix}__tab-content`}>
              <li className={`${classNamePrefix}__tab-item active-tab`}>Mẹo Cá Cược</li>
              <li className={`${classNamePrefix}__tab-item`}>Soi Kèo</li>
            </ul>
          </div>
        </div>
        <div className={`${classNamePrefix}__body`}>
          {arr.map((item, index) => {
            return <Hotnewitemcomponent item={item} key={index} />;
          })}
        </div>
        <div className={`${classNamePrefix}__footer`}>
          <p>XEM THEM</p>
        </div>
      </div>
    </div>
  );
}

export default Hotnewcomponent;

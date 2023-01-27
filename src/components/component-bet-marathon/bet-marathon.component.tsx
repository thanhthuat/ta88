import React from "react";
import image from "../../assets/img/img-betmarathon/top-logo-text.webp";
import Itemtablecomponent from "../component-itemtable/itemtable.component";
import "./betmarathon.scss";

const classNamePrefix = "betmarathon";
function Betmarathoncomponent() {
  return (
    <div className={`${classNamePrefix}`}>
      <div className={`${classNamePrefix}__header`}>
        <div className={`${classNamePrefix}__time`}>
          <p> Thời gian còn lại</p>
          {/* <h5>  NGÀY 08 GIỜ 51 PHÚT 56 GIÂY</h5> */}
          <h5> <span className="">12</span> NGÀY<span> 08 </span> GIỜ <span> 51 </span> PHÚT <span> 56 </span>GIÂY </h5>
        </div>
        <div className={`${classNamePrefix}__logo`}>
          <img src={image} alt="" />
          <div className={`${classNamePrefix}__logo-time`}>
            <span>01/2023</span>
            <i className="fa-solid fa-caret-down"></i>
          </div>
        </div>
        <div className={`${classNamePrefix}__button`}>
          <span className=""> CƯỢC NGAY</span>
        </div>
      </div>
      <div className={`${classNamePrefix}__content`}>
        <div className={`${classNamePrefix}__title`}>
          <div className={`${classNamePrefix}__title-item`}> Thứ Hạng</div>
          <div className={`${classNamePrefix}__title-item`}> Người Chơi</div>
          <div className={`${classNamePrefix}__title-item`}> Hạng Thành Viên</div>
          <div className={`${classNamePrefix}__title-item`}> Đã Cược</div>
          <div className={`${classNamePrefix}__title-item`}>Tiền Thưởng</div>
        </div>
        <div className={`${classNamePrefix}__body`}>
          <Itemtablecomponent />
          <Itemtablecomponent />
          <Itemtablecomponent />
          <Itemtablecomponent />
          <Itemtablecomponent />
          <Itemtablecomponent />
          <Itemtablecomponent />
          <Itemtablecomponent />
          <Itemtablecomponent />
          <Itemtablecomponent />
          <Itemtablecomponent />
          <Itemtablecomponent />
        </div>
      </div>
    </div>
  );
}

export default Betmarathoncomponent;

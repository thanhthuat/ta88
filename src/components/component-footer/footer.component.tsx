import React from "react";

import img from "../../assets/img/img-footer/logo-footer.webp";
import img1 from "../../assets/img/img-footer/icon-tele.webp";
import img2 from "../../assets/img/img-footer/bank.png";
import img3 from "../../assets/img/img-footer/18+.webp";
import img4 from "../../assets/img/img-footer/mga.webp";
import img5 from "../../assets/img/img-footer/logopartner.webp";
import "./footer.scss";
type Props = {};

const classNamePrefix = "footer";
function Footercomponent({}: Props) {
  return (
    <div className={`${classNamePrefix} `}>
      <div className={`${classNamePrefix}__content wapper`}>
        <div className={`${classNamePrefix}__header `}>
          <div className={`${classNamePrefix}__logo `}>
            <img src={img} alt="" />
          </div>
          <div className={`${classNamePrefix}__information `}>
            <ul>
              <li>
                <i className="fas fa-chevron-right"></i> <span>Giới Thiệu Về TA88</span>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i> <span>Điều Khoản & Điều Kiện </span>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i> <span>Chính Sách Bảo Mật </span>
              </li>
            </ul>
            <ul>
              <li>
                <i className="fas fa-chevron-right"></i> <span>Thể Thao </span>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i> <span>Nổ Hũ </span>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>Game Bài</span>
              </li>
            </ul>
            <ul>
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>Khuyến Mãi </span>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>Liên Hệ & Hỗ Trợ</span>
              </li>
              <li>
                <i className="fas fa-chevron-right"></i>
                <span>Tin Tức - Soi Kèo</span>
              </li>
            </ul>
          </div>
          <div className={`${classNamePrefix}__contact `}>
            <button className={`${classNamePrefix}__contact-btn`}>
              {" "}
              <img src={img1} alt="" /> <span className={`${classNamePrefix}__contact-txt`}>@TA88CSKH </span>{" "}
            </button>
          </div>
        </div>
        <div className={`${classNamePrefix}__body `}>
          <img src={img2} alt="" />
        </div>
        <div className={`${classNamePrefix}__footer `}>
          <div className={`${classNamePrefix}__footer-title `}>
            <p>
              Đến với TA88 là bạn đang đến với thế giới của sự chuyên nghiệp, đẳng cấp mà một nhà cái hàng đầu
              châu Á mang lại. TA88 đem đến cho khách hàng dịch vụ cá cược trực tuyến hàng đầu với hàng trăm
              sản phẩm cược hấp dẫn như: Thể Thao, Thể Thao Ảo, Casino, Number Game, Keno, Sòng Bài Số,
              Lottery,....
            </p>
          </div>
          <div className={`${classNamePrefix}__footer-image`}>
            <img src={img3} alt="" />
            <img className={`${classNamePrefix}__footer-img`} src={img4}  alt="" />
            <img src={img5} alt="" />
          </div>
        </div>
        <div className={`${classNamePrefix}__copyright `}>
          <p>Copyright © 2021 TA88. All rights reserved.</p>
        
        </div>
      </div>
    </div>
  );
}

export default Footercomponent;

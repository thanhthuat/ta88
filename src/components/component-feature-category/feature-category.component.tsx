import React from "react";
import "./featurecategory.scss";
import video1 from "../../assets/img/img-category/img-ksports.webm";
import video2 from "../../assets/img/img-category/img-csports.webm";
import video3 from "../../assets/img/img-category/img-gamebai.webm";
import video4 from "../../assets/img/img-category/img-isports-v2.webm";
import video5 from "../../assets/img/img-category/img-banca.webm";
import video6 from "../../assets/img/img-category/img-lode.webm";
import video7 from "../../assets/img/img-category/img-nohu.webm";
import video8 from "../../assets/img/img-category/img-quayso.webm";
import video9 from "../../assets/img/img-category/img-slots.webm";
import video0 from "../../assets/img/img-category/img-ingame.webm";

type Props = {};

const data = [
  { src: video1 },
  { src: video2 },
  { src: video3 },
  { src: video4 },
  { src: video5 },
  { src: video6 },
  { src: video7 },
  { src: video8 },
  { src: video9 },
  { src: video0 },
];
const classNamePrefix = "feature-category";
function FeatureCategorycomponent({}: Props) {
  return (
    <div className={`${classNamePrefix} wapper`}>
         <div className={`${classNamePrefix}__header`}>
            <h6>  DANH MỤC NỔI BẬT</h6>
         </div>
      
      <div className={`${classNamePrefix}__content`}>
        {data.slice(0, 5).map((item) => {
          return (
            <div className={`${classNamePrefix}__item`} key={item.src}>
              <video
                className={`${classNamePrefix}__item-video`}
                preload="auto"
                autoPlay
                muted
                loop={true}
                playsInline
              >
                <source src={item.src} type="video/webm" />
                Your browser does not support HTML5 video.
              </video>
            </div>
          );
        })}
      </div>
      <div className={`${classNamePrefix}__content mrt-12`}>
        {data.slice(5).map((item) => {
          return (
            <div className={`${classNamePrefix}__item1`}>
              <video
                className={`${classNamePrefix}__item1-video`}
                preload="auto"
                autoPlay
                muted
                loop={true}
                playsInline
              >
                <source src={item.src} type="video/webm" />
                Your browser does not support HTML5 video.
              </video>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FeatureCategorycomponent;

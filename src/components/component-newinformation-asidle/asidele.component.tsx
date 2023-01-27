import React from "react";
import img from "../../assets/img/img-hotnew/logo-15.jpg";
import img1 from "../../assets/img/img-hotnew/logo-16.jpg";
import img2 from "../../assets/img/img-hotnew/logo-17.jpg";
import Itemasidlecomponent from "../component-newinfoemation-asidle-item/asidle-item.component";
type Props = {};

const arr = [
  { src: img, title: "Soi kèo nhận định Manchester City vs Tottenham Hotspur , 03h00 ngày 20/01/2022", description: "Nhận định, soi kèo bóng đá Manchester City vs Tottenham Hotspur  trong khuôn khổ giải EPL Tài xỉu, Châu Á, Châu Âu chính xác hôm nay", time: "11:58 18/01/2023 - Soi kèo" },
  { src: img1, title: "Soi kèo nhận định Crystal Palace FC vs Manchester United FC , 03h00 ngày 19/01/2022", description: "Nhận định, soi kèo bóng đá Crystal Palace FC vs Manchester United FC  trong khuôn khổ giải EPL Tài xỉu, Châu Á, Châu", time: "14:34 17/01/2023 - Soi kèo" },
  { src: img2, title: "Soi kèo nhận định Wolverhampton Wanderers vs Liverpool FC , 02h45 ngày 18/01/2022", description: "Soi kèo bóng đá trận đấu Wolverhampton Wanderers vs Liverpool FC 02h45 18/01/2022", time: "12:16 16/01/2023 - Soi kèo" },
];
const classNamePrefix = "asidle";

function Asidelecomponent({}: Props) {
  return <div className={`${classNamePrefix}`}>
    {arr.map((item)=>{
        return <Itemasidlecomponent item={item} key={item.time}/>
    })}
  </div>;
}

export default Asidelecomponent;

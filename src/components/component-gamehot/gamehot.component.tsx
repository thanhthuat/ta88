import React from "react";
import Alertgamehotcomponent from "../component-alertgamehot/alertgamehot.component";
import Tabgamehotcomponent from "../component-tabgamehot/tabgamehot.component";


import './gamehot.scss';
type Props = {};

const classNamePrefix = "gamehot";
function Gamehotcomponent({}: Props) {
  return (
    <div className={`${classNamePrefix} wapper`} >
      <Tabgamehotcomponent />
      <Alertgamehotcomponent/>
    </div>
  );
}

export default Gamehotcomponent;

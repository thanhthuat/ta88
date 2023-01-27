import React from 'react'

import vipthumb from '../../assets/img/img-vipthumnail/vip-thumb-home.webp';
import './vipthumnail.scss';
type Props = {}

const classNamePrefix ='vipthumnail';
function Vipthumnailcomponent({}: Props) {
  return (
    <div className={`${classNamePrefix} wapper`}>
      <img src={vipthumb} alt="vipthumb" />
       </div>
  )
}

export default Vipthumnailcomponent
import React from 'react'
import './MediaPartners.css'
import Marquee from 'react-fast-marquee'
import CrestLogo from '../assets/mediaPartners/CrestLogo.svg'

const MediaPartners = () => {
  return (
    <div>
      <h1 className='mediaPartner-h1'>Media Partners</h1>
      <Marquee>
      <div className="mediaPartners">
        <img src={CrestLogo} alt="" />
        <img src={CrestLogo} alt="" />
        <img src={CrestLogo} alt="" />
        <img src={CrestLogo} alt="" />
      </div>
      </Marquee>
    </div>
  )
}

export default MediaPartners

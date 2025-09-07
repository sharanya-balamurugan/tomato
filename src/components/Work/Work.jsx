import React from 'react'
import './Work.css'
import {workinfodata } from '../../assets/assets'

const Work = () => {
  return (
    <div className="work-section-wrapper"> 
        <div className="work-section-top">
            <p className='heading'>Work</p>
            <h1 className='subheading'> How It work </h1>
            <p className='primary-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat id ligula efficitur tincidunt. </p>
            </div>

        <div className="work-section-bottom">
            {
            workinfodata.map((data)=>(
                    <div className='work-section-info'>
                        <div className='info-boxes-img-container'>
                        <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                )
            )}
        </div>
    </div>
  )
}

export default Work
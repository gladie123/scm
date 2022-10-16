import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'

import introVideo from '../assets/deal.mp4'
const Video = () => {
  return (
    <div className='hero'>
      <video autoPlay loop muted id='video'>
        <source src={introVideo} type= 'video/mp4' />
      </video>
      <div className='content'>
        <h1>Produce.Distribute.Earn.</h1>
        <p>Work All Around The World From Where You Are.</p>
      <div>
        <Link to='/training' className='btn'>Trading</Link>
        <Link to='/contact' className='btn btn-light'>login</Link>
      </div>
    </div>
    </div>
  )
}

export default Video;

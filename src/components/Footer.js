import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
            <div className='location'>
                <FaSearchLocation size={20} style={{color: '#ffffff' ,marginRight:'2rem'}} />
            <div>
                <p> XYZ Street.</p>
                <h4>Vijaywada,Andhra Pradesh</h4>
            </div>
            </div>
            <div className='phone'>
                <h4><FaPhone size={20} style={{color: '#ffffff' ,marginRight:'2rem'}}/>+91-XXXXX88699</h4>
            </div>
            <div className='email'>
                <h4><FaMailBulk size={20} style={{color: '#ffffff' ,marginRight:'2rem'}}/>lmno@gmail.com </h4>
            </div>
        </div>
        <div className='right'>
            <h4>About the System</h4>
            <p>If you are in a need to connect to different levels of goods productions,
               wanting to sell raw materials or finished products, our system serves best.</p>
                <div className='social'>
                    <FaFacebook size={30} style={{color: '#ffffff' ,marginRight:'1rem'}}/>
                    <FaLinkedin size={30} style={{color: '#ffffff' ,marginRight:'1rem'}}/>
                    <FaTwitter size={30} style={{color: '#ffffff' ,marginRight:'1rem'}}/>
                </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;

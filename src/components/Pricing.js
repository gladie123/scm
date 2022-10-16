import React from 'react'
import { Link } from 'react-router-dom'
import './PricingStyles.css'

const Pricing = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3>- Basic -</h3>
                <span className='bar'></span>
                <p className='btc'>30 days</p>
                <p>- acturers will directly connect to buyers once a week -</p>
                <Link to='/contact' className='btn'>Pay</Link>
            </div>
            <div className='card'>
                <h3>- Premium -</h3>
                <span className='bar'></span>
                <p className='btc'>45 days</p>
                <p>- Suppliers will engage directly with sellers online every week-</p>
                <Link to='/contact' className='btn'>Pay</Link>
            </div>
            <div className='card'>
                <h3>- VIP -</h3>
                <span className='bar'></span>
                <p className='btc'>90 days</p>
                <p>- chain revolves everyday -</p>
                <p>- Active participants will be credited at 06:00 IST every Monday,Wednesday&Sunday -</p>
                <Link to='/contact' className='btn'>Pay</Link>
            </div>
        </div>
      
    </div>
  )
}

export default Pricing;

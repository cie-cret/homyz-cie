import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
  return (
    <section className="g-wrapper" id="getStarted"> 
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className="primaryText">Get Started with Homyz</span>
                <span className="secondaryText">Subscribe and find super attractive price quotes from us.
                <br/>Find your residence soon</span>
                <span>
                    <button className="button"><a href="mailto:loongkinnoo@Homyz.com">Get Started</a></button>
                </span>
            </div>
        </div>
    </section>
  )
}

export default GetStarted
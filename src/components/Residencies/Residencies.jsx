import React from 'react';
import './Residencies.css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common';

const Residencies = () => {
    return (
      <section className="r-wrapper" id="residencies">
          <div className="paddings innerWidth r-container">
              <div className="r-head flexColStart">
                  <span className="orangeText">Best Choices</span>
                  <span className="primaryText">Popular Residencies</span>
              </div>

            <div className="swiper-horizontal">
              <Swiper {...sliderSettings}>
                    <SliderButtons style={{overflow: "visible"}} />
                  {
                      data.map((card, i)=> (
                          <SwiperSlide key={i}>
                              <div className="flexColStart r-card">
                                  <img src={card.image} alt="home" />
                                  
                                  <span className="secondaryText r-price">
                                      <span style={{color: "orange"}}>$</span><span>{card.price}</span>
                                  </span>
  
                                  <span className="primaryText r-name">
                                      {card.name}
                                  </span>
  
                                  <span className="secondaryText r-detail">
                                      {card.detail}
                                  </span>
                              </div>
                          </SwiperSlide>
                      ))
                  }
              </Swiper>
            </div>
          </div>
      </section>
    )
  }

export default Residencies

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div style={{overflow: "visible"}} className="flexCenter r-buttons">
            <button className="leftButton r-button" onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button className="rightButton r-button" onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>
    )
}
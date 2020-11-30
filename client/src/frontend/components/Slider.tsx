import React from 'react'
import { Carousel } from 'antd';



const Slider = () => {
    
    return (
        <div>
            <Carousel className="home-slider" effect="fade" dotPosition="left" autoplay>
                <div className="slider-content">
                    <h3 >First slide</h3>
                </div>
                <div className="slider-content">
                    <h3>Second slide</h3>
                </div>
                <div className="slider-content">
                    <h3>Third slide</h3>
                </div>
            </Carousel>
        </div>
    )
}

export default Slider

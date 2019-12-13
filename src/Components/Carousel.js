import React, { Component } from 'react';
import Image1 from "../Pictures/picture1.jpeg";
import Image2 from '../Pictures/picture2.jpg';
import Image3 from '../Pictures/picture3.jpg';
import left from '../Pictures/left.png';
import right from '../Pictures/right.png';
import '../CSS/Carousel.css';


class Carousel extends Component {
    render() {
        return (
            <div className="carousel">

                <button className="carousel__button carousel__button--left">
                    <img src={left} alt=""/>
                </button>

                <div className="carousel__track-container">
                    <ul className="carousel__track">
                        <li className="carousel__slide">
                            <img className="carousel__image" src={Image1} alt=""/>
                        </li>
                        <li className="carousel__slide">
                            <img className="carousel__image" src={Image2} alt=""/>
                        </li>
                        <li className="carousel__slide">
                            <img className="carousel__image" src={Image3} alt=""/>
                        </li>
                    </ul>
                </div>

                <button className="carousel__button carousel__button--right">
                    <img src={right} alt=""/>
                </button>

                <div className="carousel__nav">
                    <button className="carousel__indicator current-slide"></button>
                    <button className="carousel__indicator"></button>
                    <button className="carousel__indicator"></button>
                </div>
            </div>
        )
    }
}

export default Carousel;
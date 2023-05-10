import React from 'react'
import Carousel from "react-bootstrap/Carousel";

import BeachImg from '../assets/Beach.jpg';
import DrinkImg from '../assets/Drink.jpg';
import ShipImg from '../assets/Ship.jpg';



export default function CarouselBox() {
    return (
        <Carousel>
            <Carousel.Item>
                <img className='d-block w-100 ' height={1335} src={ShipImg} alt='ship' />
                <Carousel.Caption>
                    <h3>Ship Image</h3>
                    <p>Lorem ipsum</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className='d-block w-100' height={1335} src={DrinkImg} alt='drink' />
                <Carousel.Caption>
                    <h3>Drink Image</h3>
                    <p>Lorem ipsum</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className='d-block w-100' height={1335} src={BeachImg} alt='beach' />
                <Carousel.Caption>
                    <h3>Beach Image</h3>
                    <p>Lorem ipsum</p>
                </Carousel.Caption>
            </Carousel.Item>


        </Carousel>
    )
}

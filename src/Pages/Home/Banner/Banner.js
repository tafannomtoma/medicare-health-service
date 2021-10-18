import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';


const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src="https://chequepool.com/images/slider/img-01.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="silde-text">Intensive Care Unit</h3>
                        <p className="slide-para">Find Cancer Hospital In New York. Unlimited Access.</p>
                        <button className="slide-btn">Book An Appoinment</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src="https://drraocenter.com/wp-content/uploads/2019/07/slider-1.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="silde-text">Cabin With All Facalities</h3>
                        <p className="slide-para">Find Cancer Hospital In New York. Unlimited Access.</p>
                        <button className="slide-btn">Book An Appoinment</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src="https://blueridgeurology.com/wp-content/uploads/2015/06/slide1.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="silde-text">Free facalites Access</h3>
                        <p className="slide-para">Find Cancer Hospital In New York. Unlimited Access.</p>
                        <button className="slide-btn">Book An Appoinment</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </>
    );
};

export default Banner;
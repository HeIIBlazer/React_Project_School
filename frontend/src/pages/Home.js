import React, { useRef } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import CarouselBox from '../components/CarouselBox'
import AccordionBox from '../components/AccordionBox';
import BannerBox from '../components/BannerBox';
import CardBox from '../components/CardBox';

export default function Home() {
    const carouselRef = useRef();
    const accordionRef = useRef();
    const bannerRef = useRef();
    const cardRef = useRef();
    function carouselClick() {
        carouselRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    function accordionClick() {
        accordionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    function bannerClick() {
        bannerRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    function cardClick() {
        cardRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollToTop = () => { // scroll.scrollToTop();
        window.scrollTo({ top: 0, behavior: 'smooth' })
    };
    return (
        <>
            <Navbar sticky="top" expand="md" varian="dark" className="justify-content-center px-4"
                style={{ backgroundColor: '#4b4b46' }}>
                <Nav >
                    <Nav.Link className='text-light' onClick={scrollToTop}>ProjectSchool</Nav.Link>
                    <Nav.Link className='text-light' onClick={carouselClick}>CarouselBox</Nav.Link>
                    <Nav.Link className='text-light' onClick={accordionClick}>AccordionBox</Nav.Link>
                    <Nav.Link className='text-light' onClick={bannerClick}>BannerBox</Nav.Link>
                    <Nav.Link className='text-light' onClick={cardClick}>CardBox</Nav.Link>
                </Nav>
            </Navbar>
            {/*-------------------------------------- */}
            <section ref={carouselRef} className='pt-0'>
                <CarouselBox />
            </section>

            <section ref={accordionRef} className='pt-5'>
                <AccordionBox />
            </section>

            <section ref={bannerRef} className='pt-3'>
                <BannerBox />
            </section>

            <section ref={cardRef} className='pt-5'>
                <CardBox />
            </section>
        </>
    )
}

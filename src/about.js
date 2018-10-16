import React, { Component } from 'react';
import { SectionsContainer, Section } from 'react-fullpage';
import Headerpage from './header';
import Footerpage from './footer'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Animated } from "react-animated-css";
import logo3 from './img3.jpg';
import logo1 from './img3.jpg';
import logo2 from './img3.jpg';

class About extends Component {
    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Headerpage />
                <h2> Single Item</h2>
                <div className="container">
                    <Slider {...settings}>
                        <div>
                            <div className="card card-body bg-dark" height="100px">
                            </div>
                        </div>
                        <div>
                            <div className="card card-body bg-danger" height="100px">
                            </div>
                        </div>
                        <div>
                            <div className="card card-body bg-success" height="100px">
                            </div>
                        </div>
                        <div>
                            <div className="card card-body bg-info" height="100px">
                            </div>
                        </div>
                        <div>
                            <div className="card card-body bg-primary" height="100px">
                            </div>
                        </div>
                        <div>
                            <div className="card card-body bg-warning" height="100px">
                            </div>
                        </div>
                    </Slider>

                </div>

                <Animated className="my-5" animationIn="shake" animationOut="bounce" isVisible={true}>
                    <Section>
                        <div className="container-fluid">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-3">
                                        <Slider {...settings}>
                                            <div>
                                                <img src={logo1} class="rounded" alt="Cinque Terre" width="100%" height="170" />
                                            </div>
                                            <div>
                                                <img src={logo2} class="rounded" alt="Cinque Terre" width="100%" height="170" />
                                            </div>
                                            <div>
                                                <img src={logo3} class="rounded" alt="Cinque Terre" width="100%" height="170" />
                                            </div>
                                            <div>
                                                <img src={logo1} class="rounded" alt="Cinque Terre" width="100%" height="170" />
                                            </div>
                                            <div>
                                                <img src={logo2} class="rounded" alt="Cinque Terre" width="100%" height="170" />
                                            </div>
                                            <div>
                                                <img src={logo3} class="rounded" alt="Cinque Terre" width="100%" height="170" />
                                            </div>
                                        </Slider>
                                    </div>
                                    <div className="col-md-3">
                                        <Slider {...settings}>
                                            <div>
                                                <img src={logo1} class="rounded" alt="Cinque Terre" width="100%" height="170" />
                                            </div>
                                            <div>
                                                <img src={logo2} class="rounded" alt="Cinque Terre" width="100%" height="170" />
                                            </div>
                                            <div>
                                                <img src={logo3} class="rounded" alt="Cinque Terre" width="100%" height="170" />
                                            </div>
                                            <div>
                                                <img src={logo1} class="rounded" alt="Cinque Terre" width="100%" height="170" />
                                            </div>
                                            <div>
                                                <img src={logo2} class="rounded" alt="Cinque Terre" width="100%" height="170" />
                                            </div>
                                            <div>
                                                <img src={logo3} class="rounded" alt="Cinque Terre" width="100%" height="170" />
                                            </div>
                                        </Slider>
                                    </div>

                                    <div className="col-md-3">
                                        <Slider {...settings}>
                                            <div>
                                                <img src={logo1} class="rounded" alt="Cinque Terre" width="100%" height="170" />
                                            </div>
                                            <div>
                                                <img src={logo2} class="rounded" alt="Cinque Terre" width="100%" height="170" />
                                            </div>
                                            <div>
                                                <img src={logo3} class="rounded" alt="Cinque Terre" width="100%" height="170" />
                                            </div>
                                            <div>
                                                <img src={logo1} class="rounded" alt="Cinque Terre" width="100%" height="170" />
                                            </div>
                                            <div>
                                                <img src={logo2} class="rounded" alt="Cinque Terre" width="100%" height="170" />
                                            </div>
                                            <div>
                                                <img src={logo3} class="rounded" alt="Cinque Terre" width="100%" height="170" />
                                            </div>
                                        </Slider>
                                    </div>

                                    <div className="col-md-3">
                                        <Slider {...settings}>
                                            <div>
                                                <img src={logo1} class="rounded" alt="Cinque Terre" width="100%" height="170" />
                                            </div>
                                            <div>
                                                <img src={logo2} class="rounded" alt="Cinque Terre" width="100%" height="170" />
                                            </div>
                                            <div>
                                                <img src={logo3} class="rounded" alt="Cinque Terre" width="100%" height="170" />
                                            </div>
                                            <div>
                                                <img src={logo1} class="rounded" alt="Cinque Terre" width="100%" height="170" />
                                            </div>
                                            <div>
                                                <img src={logo2} class="rounded" alt="Cinque Terre" width="100%" height="170" />
                                            </div>
                                            <div>
                                                <img src={logo3} class="rounded" alt="Cinque Terre" width="100%" height="170" />
                                            </div>
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Section>

                </Animated>

                <Footerpage />
            </div>
        );
    }
}

export default About;
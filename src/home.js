import React, { Component } from 'react';
import logo1 from './img.jpg';
import logo2 from './img2.jpg';
import logo3 from './img3.jpg';
import googlelogo from './google-store.png'
import applelogo from './apple-store.png'
import pistonimg from './pistons.jpg'
import motorimg from './orbitolmot.jpg'
import steerimg from './stering.jpg'
import psimg from './parser.jpg'
import Typed from 'react-typed';
import Headerpage from './header';
import Footerpage from './footer';
import { SectionsContainer, Section} from 'react-fullpage';
import { FacebookIcon, TwitterIcon, TelegramIcon, WhatsappIcon, GooglePlusIcon, LinkedinIcon, PinterestIcon, TumblrIcon } from 'react-share';
import './App.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class Home extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        let options = {
            sectionClassName: 'section',
            anchors: ['home', 'popularProducts', 'FeaturedProducts', 'contactUs', 'aboutUs', 'slick'],
            scrollBar: false,
            navigation: true,
            verticalAlign: false,
            sectionPaddingTop: '50px',
            sectionPaddingBottom: '50px',
            arrowNavigation: true,


        };
        return (
            <div>
                <Headerpage />
                <SectionsContainer {...options}>
                    <Section className="pt-0">
                        <div className="section-one">
                            <div id="demo" className="carousel slide" data-ride="carousel">
                                <ul className="carousel-indicators">
                                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                                    <li data-target="#demo" data-slide-to="1"></li>
                                    <li data-target="#demo" data-slide-to="2"></li>
                                </ul>
                                <div className="carousel-inner">
                                    <div className="carousel-item active mobiles">
                                        <img src={logo1} alt="Los Angeles" />
                                        <div className="carousel-caption">
                                            <h3>Los Angeles</h3>
                                            <p>We had such a great time in LA!</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item mobiles">
                                        <img src={logo2} alt="Chicago" />
                                        <div className="carousel-caption">
                                            <h3>Chicago</h3>
                                            <p>Thank you, Chicago!</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item mobiles">
                                        <img src={logo3} alt="New York" />
                                        <div className="carousel-caption">
                                            <h3>New York</h3>
                                            <p>We love the Big Apple!</p>
                                        </div>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                                    <span className="carousel-control-prev-icon"></span>
                                </a>
                                <a className="carousel-control-next" href="#demo" data-slide="next">
                                    <span className="carousel-control-next-icon"></span>
                                </a>
                            </div>
                            <h3 className="overlay-position d-none d-sm-block">Welcome to DynaTech Engineers!</h3>
                            <div className="overlay d-none d-sm-block">
                                <span className="sub-title"><b>Here &nbsp;</b></span>
                                <Typed className="type-box"
                                    typeSpeed={40}
                                    backSpeed={50}
                                    cursor="true"
                                    strings={[
                                        '<u><b class=typed>you can see the latest events in Engineers</b></u>',
                                        '<u><b class=typed>you can buy the best products you loved</b></u>',
                                        '<u><b class=typed>you can sell the products here</b></u>',
                                        '<u><b class=typed>we will provides best quality products</b></u>',
                                        '<u><b class=typed>you can have good poducts designs</b></u>',
                                    ]}
                                    html-mode  loop>
                                </Typed>
                            </div>
                        </div>
                    </Section>
                    <Section>
                        <div className="section-two">
                            <div className="container-fluid">
                                <h1 className="display-4"><b>Featured Products</b></h1>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="card" width="400px">
                                            <img className="card-img-top" src={pistonimg} alt="Card " width="100%" height="200px" />
                                            <div className="card-body">
                                                <h5 className="card-title text-dark"><strong>Piston Pumps and Motors</strong></h5>
                                                <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                                <a href="" className="btn btn-primary btn-sm">View More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card" width="400px">
                                            <img className="card-img-top" src={motorimg} alt="Car" width="100%" height="200px" />
                                            <div className="card-body">
                                                <h5 className="card-title text-dark"><strong>Orbitol Motors</strong></h5>
                                                <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                                <a href="" className="btn btn-primary btn-sm">View More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card" width="400px">
                                            <img className="card-img-top" src={steerimg} alt="Card" width="100%" height="200px" />
                                            <div className="card-body">
                                                <h5 className="card-title text-dark"><strong>Steering Units</strong></h5>
                                                <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                                <a href="" className="btn btn-primary btn-sm">View More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card" width="400px">
                                            <img className="card-img-top" src={psimg} alt="Card" width="100%" height="200px" />
                                            <div className="card-body">
                                                <h5 className="card-title text-dark"><strong>Parts and Services</strong></h5>
                                                <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                                <a href="" className="btn btn-primary btn-sm">View More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Section>
                    <Section >
                        <div className="section-three">
                            <h1 className="display-4 text-center">Popular Products</h1>
                            <hr/>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-4">
                                    <h4 className="text-center">Hydrolic Motors</h4>
                                        <div id="demo1" className="carousel slide" data-ride="carousel">
                                            <ul className="carousel-indicators">
                                                <li data-target="#demo1" data-slide-to="0" className="active"></li>
                                                <li data-target="#demo1" data-slide-to="1"></li>
                                                <li data-target="#demo1" data-slide-to="2"></li>
                                            </ul>
                                            <div className=" carousel-inner">
                                                <div className="carousel-item active">
                                                    <img src={logo2} alt="Los Angeles" width="100%" height="300" />
                                                    <div className="carousel-caption">
                                                        <h3>Los Angeles</h3>
                                                        <p>We had such a great time in LA!</p>
                                                    </div>
                                                </div>
                                                <div className="carousel-item ">
                                                    <img src={logo1} alt="Chicago" width="100%" height="300" />
                                                    <div className="carousel-caption">
                                                        <h3>Chicago</h3>
                                                        <p>Thank you, Chicago!</p>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={logo3} alt="New York" width="100%" height="300" />
                                                    <div className="carousel-caption">
                                                        <h3>New York</h3>
                                                        <p>We love the Big Apple!</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <a className="carousel-control-prev" href="#demo1" data-slide="prev">
                                                <span className="carousel-control-prev-icon"></span>
                                            </a>
                                            <a className="carousel-control-next" href="#demo1" data-slide="next">
                                                <span className="carousel-control-next-icon"></span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                    <h4 className="text-center">Hydrolic Motors</h4>
                                        <div id="demo2" className="carousel slide" data-ride="carousel">
                                            <ul className="carousel-indicators">
                                                <li data-target="#demo2" data-slide-to="0" className="active"></li>
                                                <li data-target="#demo2" data-slide-to="1"></li>
                                                <li data-target="#demo2" data-slide-to="2"></li>
                                            </ul>
                                            <div className=" carousel-inner">
                                                <div className="carousel-item active">
                                                    <img src={logo2} alt="Los Angeles" width="100%"/>
                                                    <div className="carousel-caption">
                                                        <h3>Los Angeles</h3>
                                                        <p>We had such a great time in LA!</p>
                                                    </div>
                                                </div>
                                                <div className="carousel-item ">
                                                    <img src={logo1} alt="Chicago" width="100%"/>
                                                    <div className="carousel-caption">
                                                        <h3>Chicago</h3>
                                                        <p>Thank you, Chicago!</p>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={logo3} alt="New York" width="100%" />
                                                    <div className="carousel-caption">
                                                        <h3>New York</h3>
                                                        <p>We love the Big Apple!</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <a className="carousel-control-prev" href="#demo2" data-slide="prev">
                                                <span className="carousel-control-prev-icon"></span>
                                            </a>
                                            <a className="carousel-control-next" href="#demo2" data-slide="next">
                                                <span className="carousel-control-next-icon"></span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                    <h4 className="text-center">Hydrolic Motors</h4>
                                        <div id="demo3" className="carousel slide" data-ride="carousel">
                                            <ul className="carousel-indicators">
                                                <li data-target="#demo3" data-slide-to="0" className="active"></li>
                                                <li data-target="#demo3" data-slide-to="1"></li>
                                                <li data-target="#demo3" data-slide-to="2"></li>
                                            </ul>
                                            <div className=" carousel-inner">
                                                <div className="carousel-item active">
                                                    <img src={logo2} alt="Los Angeles" width="100%"/>
                                                    <div className="carousel-caption">
                                                        <h3>Los Angeles</h3>
                                                        <p>We had such a great time in LA!</p>
                                                    </div>
                                                </div>
                                                <div className="carousel-item ">
                                                    <img src={logo1} alt="Chicago" width="100%"/>
                                                    <div className="carousel-caption">
                                                        <h3>Chicago</h3>
                                                        <p>Thank you, Chicago!</p>
                                                    </div>
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={logo3} alt="New York" width="100%" />
                                                    <div className="carousel-caption">
                                                        <h3>New York</h3>
                                                        <p>We love the Big Apple!</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <a className="carousel-control-prev" href="#demo3" data-slide="prev">
                                                <span className="carousel-control-prev-icon"></span>
                                            </a>
                                            <a className="carousel-control-next" href="#demo3" data-slide="next">
                                                <span className="carousel-control-next-icon"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Section>
                    <Section>
                        <div className="container-fluid">
                            <div className="col-md-12">
                            <h1 className="display-4 text-center">Popular Products</h1>
                            <hr/>
                                <div className="row pt-5">
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
                    <Section>
                        <div className="section-four">
                            <div className="container-fluid px-0">
                                <div className="col-md-12 px-0">
                                    <div className="card">
                                        <div className="card-header dispaly-4"><h1 className="display-4"><b>Contact Us</b></h1></div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-6 slide-left">
                                                    <h3 className="text-secondary text-left">Dynatech Engineers</h3>
                                                    <hr />
                                                    <address className="text-justify">
                                                        <i className="fa fa-map-signs fa-1x pr-2 text-info"></i>&nbsp;&nbsp;Plot No. D344&35,G-2,Mythri Apartments,<br />
                                                        <i className="fa fa-map-pin fa-1x pr-2 text-danger"></i>&nbsp;&nbsp;ECIL Cross Roads,Opp. Telephone Exchange,<br />
                                                        <i className="fa fa-map-marker fa-1x pr-2 text-warning"></i>&nbsp;&nbsp; Hyderabad, Telangana, 500062,<br />
                                                        <i className="fa fa-user-circle-o fa-1x pr-2 text-success"></i>&nbsp;&nbsp;Chandra Sekhar.s<br />
                                                        <i className="fa fa-phone fa-1x pr-2 text-primary"></i>&nbsp;&nbsp;9849016834<br />
                                                        <i className="fa fa-globe fa-1x pr-2 text-secondary"></i>&nbsp;&nbsp;India</address>
                                                    <div className="text-left">
                                                        Download App
                                                            <img src={googlelogo} width="120px" alt="google" height="51px" />

                                                        <img src={applelogo} alt="apple" width="120px" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <h3 className="text-secondary text-left pl-3">Also Listed In</h3>
                                                    <hr />
                                                    <div className="container">
                                                        <div id="accordion">
                                                            <div className="card">
                                                                <div className="card-header">
                                                                    <a className="card-link pull-left" data-toggle="collapse" href="#collapseOne">
                                                                        Gear Motors</a><i className="fa fa-angle-down rotate-icon fa-1x pull-right" href="#collapseOne"></i>
                                                                </div>
                                                                <div id="collapseOne" className="collapse show" data-parent="#accordion">
                                                                    <div className="card-body">
                                                                        <span className="pull-left text-justify">The Gear Box and Motor offered by us is precision
                                                                        engineered using superior grade materials and are thus resistant
                                                                        to wear and rust proof. Owing to the high performance of the products,
                                                                        they have gained popularity in the market and are sought after.</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card">
                                                                <div className="card-header">
                                                                    <a className="collapsed card-link pull-left" data-toggle="collapse" href="#collapseTwo">
                                                                        Hydraulic Motors</a>
                                                                    <i className="fa fa-angle-down rotate-icon fa-1x pull-right"></i>
                                                                </div>
                                                                <div id="collapseTwo" className="collapse" data-parent="#accordion">
                                                                    <div className="card-body">
                                                                        <span className="pull-left text-justify">We are involved in distributing and
                                                                         supplying best quality
                                                                        of veljan double vane hydraulic pump, tokimec hydraulic vane pump,
                                                                        veljan denison hydraulic pump, veljan hydraulic seat valve,
                                                                        veljan hydraulic control valves, veljan hydraulic cartridge kits,
                                                                        veljan hydraulic axial piston pump,veljan hydraulic check valve, veljan hydraulic
                                                                         direction...</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card">
                                                                <div className="card-header">
                                                                    <a className="collapsed card-link pull-left" data-toggle="collapse" href="#collapseThree">
                                                                        Power Steering</a><i className="fa fa-angle-down rotate-icon fa-1x pull-right"></i>
                                                                </div>
                                                                <div id="collapseThree" className="collapse" data-parent="#accordion">
                                                                    <div className="card-body">
                                                                        <span className="pull-left text-justify">Voltage Regulators with Integrated Circuits The board is
                                                                        designed to study the regulators, in particular the voltage regulators,
                                                                        with integrated circuits. The board is arranged into several modules
                                                                        that allow the study of threeterminals positive and negative voltage regulators
                                                                         with either fixed ......</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Section>
                    <Section>
                        <div className="section-five">
                            <h1 className=" text-center">About Us</h1>
                            <div className="jumbotron pt-2">
                                <span className="display-4 text-danger">Dynatech</span><span className="display-4 text-warning">India</span>
                                <div className="mt-3 text-secondary">
                                    <a href="#get">Getdistributors.com</a> | <a href="#sme"> SME</a> | <a href="#time">Times Blog</a>
                                </div>
                                <div className="text-center ">
                                    <p className="text-justify text-center text-secondary">India's Largest B2B Marketplace, Connecting Buyers and Sellers.</p>
                                </div>
                                <div>
                                    <a href="#get">Privacy Policy- Terms of Use</a>&nbsp;&nbsp;
                               © {(new Date().getFullYear())} Dynatech Engineers Limited. All rights reserved.
                              </div>
                                <div className="row">
                                    <div className="col-md-4 px-0"></div>
                                    <div className="col-md-4 pt-4 pl-5">
                                        <h4 className="text-center text-danger"> Be Social <strong>Take Part</strong></h4>
                                        <div className="row pl-5">
                                            <TwitterIcon size={40} round={true} className="pr-2 " />
                                            <FacebookIcon size={40} round={true} className="pr-2 " />
                                            <WhatsappIcon size={40} round={true} className="pr-2 " />
                                            <GooglePlusIcon size={40} round={true} className="pr-2 " />
                                            <TelegramIcon size={40} round={true} className="pr-2 " />
                                            <LinkedinIcon size={40} round={true} className="pr-2 " />
                                            <PinterestIcon size={40} round={true} className="pr-2 " />
                                            <TumblrIcon size={40} round={true} className="pr-2 " />
                                        </div>
                                        <p className="text-justify text-info text-center pt-3">Want to socialize with us?</p>
                                        <p className="text-justify text-info text-center">Get to know us and take art in the conversation</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Section>
                </SectionsContainer>
                <Footerpage />
            </div>
        );
    }
}

export default Home;
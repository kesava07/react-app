import React, { Component } from 'react';
import logo from './orange.png'
import {Link } from 'react-router-dom';
import './App.css'
class Headerpage extends Component {
    render() {
        return (
            <div className="header-section">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <span className="navbar-brand">
                        <Link to='/' className='link-style'><img src={logo} alt="logo" className="my-logo"/></Link>
                    </span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <span className="nav-link"><Link to='/' className='link-style'>Home</Link><span className="sr-only">(current)</span></span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link"><Link to='/about' className='link-style'>About</Link></span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link"><Link to='/contact' className='link-style'>Contact Us</Link></span>
                            </li>
                            <li className="nav-item dropdown">
                                <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className='link-style services-pointer'>Services</span></span>
                                <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                                    <span className="dropdown-item"><Link to='/services' className="link-style-one">Cars</Link></span>
                                    <span className="dropdown-item" href="#"><Link to='/dashboard' className="link-style-one">dashboard</Link></span>
                                    <div className="dropdown-divider"></div>
                                    <span className="dropdown-item" href="#">Something else here</span>
                                </div>
                            </li>
                        </ul>
                        <div className="my-2 my-lg-0">
                        <Link to='/signup'><button className="btn btn-sm btn-success my-2 my-sm-0 mx-2" type="button">Sign Up</button></Link>
                            <button className="btn btn-sm btn-primary my-2 my-sm-0 " type="button"><Link to='/login' className='link-style'>Login</Link></button>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Headerpage;
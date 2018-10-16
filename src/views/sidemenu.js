import React, { Component } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import '../../src/views/chenna.css'
import {Link } from 'react-router-dom';
import '../../src/App.css'


class Sidemenu extends Component {
    state = {}
    render() {
        return (
            <div>
                <SideNav className="bg-dark">
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="home">
                        <NavItem eventKey="home">
                            <NavIcon>
                            <Link to="/dashboard" className="link-style-one"><i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /></Link> 
                            </NavIcon>
                            <NavText>
                                <Link to="/dashboard" className="link-style-one">Home</Link>
            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts">
                            <NavIcon>
                                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Charts
            </NavText>
                        </NavItem>
                        <NavItem eventKey="Events">
                            <NavIcon>
                                <i className="fa fa-fw fa-fire" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                            Events
            </NavText>
                        </NavItem>
                        <NavItem eventKey="Services">
                            <NavIcon>
                                <i className="fa fa-fw fa-bookmark" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                            Services
            </NavText>
                        </NavItem>
                        <NavItem eventKey="Logout">
                            <NavIcon>
                            <Link to='/login' className='link-style'><i className="fa fa-fw fa-sign-out" style={{ fontSize: '1.75em' }} /></Link>
                                
                            </NavIcon>
                            <NavText>
                            <Link to='/login' className='link-style'>Logout</Link>
            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
            </div>
        );
    }
}

export default Sidemenu;
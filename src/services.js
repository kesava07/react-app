import React, { Component } from 'react';
import Headerpage from './header';
import Footerpage from './footer'
class Services extends Component {
    state = {  }
    render() {
        return (
            <div>
                 <Headerpage/>
                 <h2 className="section-margin">Welcome to Services Page</h2>
                <Footerpage/>
            </div>
        );
    }
}

export default Services;
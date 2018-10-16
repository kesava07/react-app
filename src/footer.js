import React, { Component } from 'react';
class Footerpage extends Component {
    state = {}
    render() {
        return (
            <div>
                <footer className="footer-style">
                    <div className="footer-style-padding">© {(new Date().getFullYear())} Copyright:
                    <a href=""> Dynatech Engineers</a>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footerpage;
import React, { Component } from 'react';
import Headerpage from './header';
import Footerpage from './footer';


class Signup extends Component {
    render() {
        return (
            <div>
            <Headerpage />
            <div className="login-section">
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className="card bg-light">
                                <div className="card-body">
                                    <h1 className="text-center"> Sign Up</h1>
                                    <hr/>
                                    <div className="row">
                                    <div className="col-md-6">
                                    <div className="form-group">
                                     
                                      <input type="email" name="user name" className="form-control my-2" placeholder="enter Email" />
                                      <input type="text" name="user name" className="form-control my-2" placeholder="enter user name" />
                                    
                                      <input type="password" name="user name" className="form-control my-2" placeholder="enter password"  />
                                      <input type="password" name="user name" className="form-control my-2" placeholder="Re type Password"  />
                                      <button type="button" className="btn btn-sm btn-info mt-3">Sign Up</button>
                                    </div>
                                    </div>
                                    <div className="col-md-6 mt-5">
                                    <button type="button" className="btn btn-sm  btn-primary btn-block">Log in whith Facebook</button>
                                    <button type="button" className="btn btn-sm  btn-danger  btn-block">Log in with Google</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footerpage />
        </div>
        );
    }
}

export default Signup;

import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import logo from './images/download.png';
import {FormControl} from 'react-bootstrap';

import {Form,Button} from 'reactstrap';
import {
    NavLink,
    HashRouter
}
from "react-router-dom";


export default class header extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <div align="">
                        <div className="content2">
                            <img src={logo} alt="logo" align="left" />
                            <h3 align="left"><b>SL RAILWAYS</b></h3>
                            <div className="content3">
                                <Form inline>
                                    <FormControl type="text" placeholder="Username" className="mr-sm-2" />
                                    <FormControl type="text" placeholder="Password" className="mr-sm-2" />
                                    <Button variant="outline-info"><b>SignUp</b></Button>
                                </Form>
                            </div>
                        </div>
                        <ul className="header">
                            <li><NavLink to="/Home"><b>HOME</b></NavLink></li>
                            <li><NavLink to="/About"><b>ABOUT</b></NavLink></li>
                            <li><NavLink to="/Contact"><b>CONTACT</b></NavLink></li>
                        </ul>
                    </div>
                </HashRouter>
            </div>
        );
    }
}

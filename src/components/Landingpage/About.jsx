import React, { Component } from 'react';
import { Link } from "react-router-dom"

import './src/css/about.css'
export default class AboutusIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
 
    render() {
        return (
            <div>
                <div className="landing-about-parent">
                    <div className="landing-about-img-parent">
                        <div className="landing-about-img-parent-content">
                        
                        </div>
                    </div>
                    <div className="landing-about-parent-heading">
                        3th Nov'19 &nbsp; &nbsp;  ●  &nbsp; &nbsp; MAC Audi
                    </div>

                    {/* <button className="landing-about-button">REGISTER</but-ton> */}

                    <a href='https://www.townscript.com/e/tedx-423211' target="_blank"><button className="landing-about-button">REGISTER</button></a>
                </div>
            </div>

        )
    }
}

import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar'
import './src/css/index.css'
import '../../index.css'
import Member from './Member'
import Footer from '../Landingpage/Footer';
import Heading from '../Landingpage/Heading';
export default class TeamIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
            <div style={{backgroundImage: "linear-gradient(to right, #1e1e26, #291e24 57%, #341f21)"}}>
                <section id="landing-page-navbar"> <Navbar /></section>
                <div className="landing-page">
                    <div className="landing-page-parent">
                        <h1 className="landing-page-heading">TEAM</h1>
                        <div className="landing-page-image"></div>
                    </div>
                    {/* <div className="landing-Theme-slider-parent-pic">
                            <Heading text="TEAM"/>
                        </div> */}
                    <ul className="member-list">
                        <Member className="member-list-child" name="AMRITHA" position="Curator"/>
                        <Member className="member-list-child" name="KESHVAM" position="Co-Curator"/>
                        <Member className="member-list-child" name="DHRUV KALSOTRA" position="Head of Sponshorship"/>
                        <Member className="member-list-child" name="RAGHUVANSH RAWAT" position="Head of Operationa"/>
                        <Member className="member-list-child" name="AKASH RAJ" position="Head of PR and Marketing"/>
                        <Member className="member-list-child" name="SUDHIR BALAKRISHNAN" position="Senior Manager"/>
                        <Member className="member-list-child" name="SAI VARUN MULA" position="Executive Admin-Relations"/>
                        <Member className="member-list-child" name="UTKARSH MATHUR" position="Manager"/>
                        <Member className="member-list-child" name="PARTH SINGH PARIHAR" position="Manager"/>
                        <Member className="member-list-child" name="ROCHISHA AGARWAL" position="Manager"/>
                        <Member className="member-list-child" name="NALIN PRABATH" position="Manager"/>
                        <Member className="member-list-child" name="KSHTIJ SRIKANT" position="Manager"/>
                        <Member className="member-list-child" name="AGASTYA VARAHALA" position="Manager"/>
                        <Member className="member-list-child" name="SEJAL GUPTA" position="Manager"/>
                        <Member className="member-list-child" name="MOHIT SHARMA" position="Manager"/>
                        <Member className="member-list-child" name="ANURAG GUPTA" position="Manager"/>
                        <Member className="member-list-child" name="RATHOD KIRTHI" position="Manager"/>
                    </ul>
                </div>
            </div>
            <Footer/>
            </div>

        )
    }
}

import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "./src/css/navbar.css"


export default class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            activenav: window.location.pathname.substring(1),
            isHidden: true,
            displaynavbar: false,
            navdisplay: true
        }
        this.setActive = this.setActive.bind(this)
    }
    setActive = (state) => {
        // console.log(this.state.activenav, "asdbh")
        // console.log(state, "asdahvdha")
        this.setState({
            activenav: state
        });
    }
    toggleHidden = () => {
        this.setState({
            isHidden: !this.state.isHidden
        });
    }
   
    componentDidMount() {
        console.log("hello")
        console.log(this.state.navdisplay,"navdisplay")
        if (window.innerWidth >= 768) {
            this.setState(
                {
                    navdisplay: false
                }
            )
        }

        // let doc = document.getElementById("navbar")

        // window.addEventListener("scroll", function () {
        //     let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
        //     if (scrollTop >= 100) {
        //         doc.classList.add("scroll")
        //     }
        //     else {
        //         doc.classList.remove("scroll")
        //     }

        // }, false)
    }

  
    render() {
        return (
            <div id="navbar" className="ecell-navbar-parent">
              
                <div className="ecell-navbar-logo">
                <Link to="/"><div className="ecell-navbar-logo-img"></div></Link>
                </div>
                
                <div className="ecell-navbar-ctos">
                    <div className="ecell-navbar-toggle">
                        <div className={!this.state.displaynavbar ? 'new-navbar-i' : 'new-navbar-i span-cross'} onClick={() => this.setState({ displaynavbar: !this.state.displaynavbar })}>
                            <span><i></i></span>
                            <span><i></i></span>
                            <span><i></i></span>
                        </div>
                    </div>
                    {this.state.navdisplay ?
                        <div className={this.state.displaynavbar ? 'ecell-mobile-navbar-active' : 'ecell-mobile-navbar-inactive'}>
                            <Link to="/" className={this.state.activenav === "" ? "ecell-ctos-navbar-option linkactive" : "ecell-ctos-navbar-option"}
                                    onClick={() => this.setActive("")}>
                                <div className={this.state.displaynavbar ? "navbar-show" : "navbar-hide"}>
                                    Home
                                </div>
                            </Link>
                            {/* <Link to="/talks" className="">
                                <div className={this.state.displaynavbar ? "navbar-show" : "navbar-hide"}>
                                   Talks
                                </div>
                            </Link> */}
                            <Link to="/about" className={this.state.activenav === "about" ? "ecell-ctos-navbar-option linkactive" : "ecell-ctos-navbar-option"}
                                    onClick={() => this.setActive("about")}>
                                <div className={this.state.displaynavbar ? "navbar-show" : "navbar-hide"}>
                                    About
                                </div>
                            </Link>
                            {/* <Link to="/partner" className="">
                                <div className={this.state.displaynavbar ? "navbar-show" : "navbar-hide"}>
                                    Partner   
                                </div>
                            </Link> */}
                            <Link to="/team" className={this.state.activenav === "team" ? "ecell-ctos-navbar-option linkactive" : "ecell-ctos-navbar-option"}
                                    onClick={() => this.setActive("team")}>
                                <div className={this.state.displaynavbar ? "navbar-show" : "navbar-hide"}>
                                    Team
                                </div>
                            </Link>

                        </div>
                        : null }



                        <div className={this.state.displaynavbar ? 'ecell-mobile-navbar-active' : 'ecell-mobile-navbar-inactive'}>
                            <Link to="/" className={this.state.activenav === "" ? "ecell-ctos-navbar-option linkactive" : "ecell-ctos-navbar-option"}
                                    onClick={() => this.setActive("")}>
                                <div className={this.state.displaynavbar ? "navbar-show" : "navbar-hide"}>
                                    Home
                                </div>
                            </Link>
                            {/* <Link to="/talks" className="">
                                <div className={this.state.displaynavbar ? "navbar-show" : "navbar-hide"}>
                                   Talks
                                </div>
                            </Link> */}
                            <Link to="/about" className={this.state.activenav === "about" ? "ecell-ctos-navbar-option linkactive" : "ecell-ctos-navbar-option"}
                                    onClick={() => this.setActive("about")}>
                                <div className={this.state.displaynavbar ? "navbar-show" : "navbar-hide"}>
                                    About
                                </div>
                            </Link>
                            {/* <Link to="/partner" className="">
                                <div className={this.state.displaynavbar ? "navbar-show" : "navbar-hide"}>
                                    Partner   
                                </div>
                            </Link> */}
                            <Link to="/team" className={this.state.activenav === "team" ? "ecell-ctos-navbar-option linkactive" : "ecell-ctos-navbar-option"}
                                    onClick={() => this.setActive("team")}>
                                <div className={this.state.displaynavbar ? "navbar-show" : "navbar-hide"}>
                                    Team
                                </div>
                            </Link>

                        </div>
                    <div className="ecell-navbar-int-ctos">
                        <ul id="ecell-navbar-options-hide">
                            <li className="ecell-navbar-ctos-dropdown">

                                <Link to="/" className={this.state.activenav === "" ? "ecell-ctos-navbar-option linkactive" : "ecell-ctos-navbar-option"}
                                    onClick={() => this.setActive("")}>
                                    Home
                                </Link>
                               
                            </li>
                            {/* <li className="ecell-navbar-ctos-dropdown">
                                <Link to="/talks" className={this.state.activenav === "initiatives" ? "ecell-ctos-navbar-option linkactive" : "ecell-ctos-navbar-option"}
                                    onClick={() => this.setActive("initiatives")}>
                                    Talks
                                </Link>
                              
                            </li> */}
                            <li className="ecell-navbar-ctos-dropdown">
                                <Link to="/about" className={this.state.activenav === "about" ? "ecell-ctos-navbar-option linkactive" : "ecell-ctos-navbar-option"}
                                    onClick={() => this.setActive("about")}>
                                    About 
                                </Link>
                               
                            </li>
                            {/* <li className="ecell-navbar-ctos-dropdown">
                                <Link to="/partner" className={this.state.activenav === "resources" ? "ecell-ctos-navbar-option linkactive" : "ecell-ctos-navbar-option"}
                                    onClick={() => this.setActive("resources")}>
                                    Partner
                                    </Link>
                              
                            </li> */}
                            <li className="ecell-navbar-ctos-dropdown">
                                <Link to="/team" className={this.state.activenav === "team" ? "ecell-ctos-navbar-option linkactive" : "ecell-ctos-navbar-option"}
                                    onClick={() => this.setActive("team")}>
                                    Team
                                </Link>
                               
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

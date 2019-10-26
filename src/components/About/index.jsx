import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Glimpses from "./Glimpses";
import Footer from "../Landingpage/Footer";
import "./css/index.css";

export default class AboutIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="about-page">
        {/* <nav
          id="about-page-navbar"
          style={{
            backgroundImage:
              "linear-gradient(to right, #1e1e26, #291e24 57%, #341f21)"
          }}
        > */}
        {/* <div className="about-page-heading">
            <p>
              <span className="ted">
                TED<sup>x</sup>
              </span>

              <span className="iitr"> &nbsp;IITRoorkee</span>
            </p>
          </div> */}
        <Navbar />
        {/* </nav> */}
        <section className="about-section1">
          <div className="about-section1-background"></div>
          <div className="about-section1-content">
            <div className="about-section1-content-image"></div>
            <div className="about-section1-content-text">
              <h1>
                What is <span>TED</span>?
              </h1>
              <p>
                TED is a global community, welcoming people from every
                discipline and culture who seek a deeper understanding of the
                world. The primary belief lies in the power of ideas to change
                attitudes, lives and, ultimately, the world. TED is owned by a
                nonprofit, nonpartisan foundation and the main agenda is to make
                great ideas accessible and spark conversation.
              </p>
            </div>
          </div>
        </section>
        <section className="about-section2">
          <div className="about-section2-background"></div>
          <div className="about-section1-content">
            <div className="about-section1-content-text">
              <h1>
                What is <span>TEDx</span>?
              </h1>
              <p style={{ alignSelf: "flex-start" }}>
                TEDx brings the spirit of TED’s mission of ideas worth spreading
                to local communities around the globe. TEDx events are organized
                by curious individuals who seek to discover ideas and spark
                conversations in their own community. TEDx events include live
                speakers and recorded TED Talks, and are organized independently
                under a free license granted by TED.
              </p>
            </div>
            <div className="about-section1-content-image"></div>
          </div>
        </section>
        <section className="about-section3">
          <div className="about-section1-background"></div>
          <div className="about-section1-content">
            <div className="about-section1-content-image"></div>
            <div className="about-section1-content-text">
              <h1>
                What is <span>TEDxIITRoorkee</span>?
              </h1>
              <p>
                Team TEDxIITRoorkee has been conducting TED Talks in the campus
                for the past few years with the aim to inspire, motivate and
                provide a new outlook in life. We, here at IIT Roorkee,
                celebrate those who have questioned the current norms and
                excelled extraordinarily. We started our journey in 2012 and are
                setting new benchmarks every year. Our aim is to bring together
                a diverse group of speakers who can share their thoughts,
                insights, and experiences and enlighten the audience by their
                presence
              </p>
            </div>
          </div>
        </section>
        <Glimpses />
        <Footer />
      </div>
    );
  }
}

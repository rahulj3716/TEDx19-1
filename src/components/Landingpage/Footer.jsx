import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./src/css/footer.css";
export default class FooterIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="landing-footer-parent">
          <div className="landing-footer-childl">
            <div className="landing-footer-childl-heading">
              <p>
                <span className="ted">
                  TED<sup>x</sup>
                </span>
                <span className="iitr">IITRoorkee</span>
              </p>
            </div>
            <div className="landing-footer-childl-content">
              <p>
                Since the beginning of time, humans have been surrounded by
                constraints and challenged with the task to overcome them. A
                huge part of our evolution revolves around these constraints.
                Although culture and tradition have provided us with a basis for
                living standards, they have held us back in many ways. Going
                against the tradition is not to be viewed as a step in the wrong
                direction, but rather as an attempt at a new, unexplored
                adventure. This year, TEDxIITRoorkee is focused on encouraging
                people to go against the flow and try out new ventures, and also
                guide them along their journey.
              </p>
            </div>
          </div>
          <div className="landing-footer-childr">
            <ul className="footer-links">
              <li><a href='https://www.townscript.com/e/tedx-423211' target="_blank">REGISTER</a></li>
              <li>PARTNER</li>
              <li><Link to="/">THEME</Link></li>
              <li><Link to="/about">ABOUT</Link></li>
              <li><Link to="/">SPEAKERS</Link></li>
              <li>TALKS</li>
              <li><Link to="/team">TEAM</Link></li>
              <li>CONTACT US</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

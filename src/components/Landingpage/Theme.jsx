import React, { Component } from "react";
import "./src/css/theme.css";
import Heading from "./Heading";
export default class ThemeIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="landing-Theme-parent">
          <div className="landing-Theme-slider-parent">
            <div className="landing-Theme-slider-parent-pic">
              <Heading text="THEME" />
            </div>
            <div className="landing-Theme-slider-child">
              TEDxIITRoorkee is focused on encouraging people to go against the
              flow and try out new ventures, and also guide them along their
              journey by conducting this year’s talks on the theme "Beyond the
              Barriers". Our aim is to bring together a diverse group of
              speakers who can share their thoughts, insights, and experiences
              and enlighten the audience by their presence.
              <br />
              <br />
              We at TEDxIITRoorkee believe that there can be a lot of barriers
              inhibiting an individual from reaching his true potential. The
              path of success is hindered by physical, technological, social and
              mental barriers.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

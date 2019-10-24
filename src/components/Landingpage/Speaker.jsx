import React, { Component } from "react";
import { Icon } from "antd";
import "antd/dist/antd.css";
import "./src/css/speaker.css";
import Heading from "./Heading";
import { speakers } from "./content";
import Image from "./src/images/download.jpg";

var slideIndex = 1;

export default class SpeakerIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: 0
    };
  }
  componentDidMount = () => {
    this.showSlides(slideIndex);
  };
  left = n => {
    this.showSlides((slideIndex -= n));
  };
  current = n => {
    this.showSlides((slideIndex = n));
  };
  next = n => {
    this.showSlides((slideIndex += n));
  };

  showSlides = n => {
    var i;
    var slides = document.getElementsByClassName("slide");
    var currentSpeaker = document.getElementsByClassName(
      "landing-speaker-parent-header-content-speakers"
    );
    var currentSpeakerName = document.getElementsByClassName(
      "landing-speaker-parent-header-content-speakers-h1"
    );
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    if (slideIndex < 1) {
      slideIndex = slides.length;
    }
    this.setState({
      background: slideIndex
    });
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < currentSpeaker.length; i++) {
      currentSpeaker[i].className = currentSpeaker[i].className.replace(
        " active",
        ""
      );
    }
    for (let i = 0; i < currentSpeakerName.length; i++) {
      currentSpeakerName[i].className = currentSpeakerName[i].className.replace(
        " active-text",
        ""
      );
    }
    slides[slideIndex - 1].style.display = "block";
    currentSpeaker[slideIndex - 1].className += " active";
    currentSpeakerName[slideIndex - 1].className += " active-text";
  };
  render() {
    console.log(this.state.background);
    return (
      <div className="landing-speaker-parent">
        <div
          className="landing-speaker-parent-background"
          style={{
            backgroundImage: `url(${speakers[5].img})`
          }}
        ></div>
        <div className="landing-speaker-parent-header">
          <div className="landing-speaker-parent-heading">
            <Heading text="SPEAKERS" />
          </div>
          <div className="landing-speaker-parent-header-content">
            {speakers.map(item => {
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    this.current(item.id);
                  }}
                >
                  <div
                    className="landing-speaker-parent-header-content-speakers"
                    style={{
                      backgroundImage: `url(${item.img})`
                    }}
                  ></div>
                  <h1 className="landing-speaker-parent-header-content-speakers-h1">
                    {item.firstName + " " + item.lastName}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>

        <div className="landing-speaker-content-parent">
          <Icon
            className="landing-speaker-content-icon"
            type="left"
            onClick={() => {
              this.left(1);
            }}
          ></Icon>
          <div className="slider">
            {speakers.map(item => {
              return (
                <div key={item.id} className="slide fade">
                  <div className="slide-wrapper">
                    <div
                      className="slide-image"
                      style={{
                        backgroundImage: `url(${item.img})`
                      }}
                    ></div>
                    <div className="slide-text">
                      <div className="slide-text-heading">
                        <span>{item.firstName}&nbsp;</span>
                        <span style={{ color: "white" }}>{item.lastName}</span>
                      </div>
                      <h3>{item.designation}</h3>
                      <p>{item.about}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Icon
            className="landing-speaker-content-icon"
            type="right"
            onClick={() => {
              this.next(1);
            }}
          ></Icon>
        </div>
      </div>
    );
  }
}

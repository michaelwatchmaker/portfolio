import * as React from "react";

import "../styles/project.css";
import "../styles/global.css";

import Navigation from "../components/nav";
import Footer from "../components/footer";

import HeroImage from "../images/tile-video.jpg";

import CallBoth from  "../images/Video/call-both.jpg";
import Messages from  "../images/Video/messages.jpg";
import NextSteps from  "../images/Video/next-steps.jpg";

import BannerMP4 from "../images/Video/banner-slide.mp4";
import BannerWEBM from "../images/Video/banner-slide.webm";

import TalkMP4 from "../images/Video/bubble-talk.mp4";
import TalkWEBM from "../images/Video/bubble-talk.webm";

const ProjVideo = () => {
  return (
    <div>
      <title>Michael Watchmaker</title>
        <Navigation/>
        <main>
          <div className="project-section">
            <div className="project-header animated">
              <h1 className="left header-alt">Telehealth Video</h1>
              <p className="display left height-sm text-alt">HeyDoctor</p>
            </div>
            <div className="project-image hero-image hero-video animated-delay">
              <img src={HeroImage} alt="hero"/>
            </div>
          </div>
          <div className="text-section">
            <p className="display left regular height-lg">HeyDoctor functions as a virtual urgent care. Patients select a condition they have, answer a few questions, and are connected to a doctor. In telehealth, different states require different modes of communication when connecting with a doctor virtually. I was the design lead for the Visit Experience team that sought to make interactions between doctors and patients frictionless.</p>
            <p className="display left regular height-lg">During 2020 the business was keen on expanding coverage to all 50 states. The primary risk we faced was low conversion rates in states that required video. I captured insights explaining why video calls in particular were often unsuccessful, then developed a new experience to connect patients to a doctor over video with minimal waiting.</p>
          </div>
          <div className="project-section">
            <div className="project-image">
              <img src={Messages} alt="messages"/>
            </div>
            <div className="project-image">
              <img src={CallBoth} alt="on the call"/>
            </div>
            <div className="project-image">
              <img src={NextSteps} alt="next steps"/>
            </div>
            <div className="project-image">
              <video playsInline autoPlay loop muted>
                <source type="video/webm" src={BannerWEBM}></source>
                <source type="video/mp4" src={BannerMP4}></source>
              </video>
            </div>
            <div className="project-image">
              <video playsInline autoPlay loop muted>
                <source type="video/webm" src={TalkWEBM}></source>
                <source type="video/mp4" src={TalkMP4}></source>
              </video>
            </div>
          </div>
          <div className="text-section content-block">
            <p className="body left medium height-sm text-alt">Results</p>
            <p className="display left regular height-lg">After launch, visit completion for video states rose from 20% to 38%. This work helped the business expand to nationwide coverage in the following months.</p>
          </div>
        </main>
      <Footer/>
    </div>
  )
}

export default ProjVideo
import * as React from "react";

import "../styles/project.css";
import "../styles/global.css";

import Navigation from "../components/nav";
import Footer from "../components/footer";

import HeroImage from "../images/tile-video.jpg";

const ProjVideo = () => {
  return (
    <div>
      <title>Michael Watchmaker</title>
        <Navigation/>
        <main>
          <div className="project-section">
            <div className="header-section animated">
              <h1 className="left header-alt">Telehealth Video</h1>
              <div className="project-detail-wrapper">
                <div className="project-detail">
                  <p className="meta medium text-alt">Company</p>
                  <p className="body regular height-lg">HeyDoctor</p>
                </div>
                <div className="project-detail">
                  <p className="meta medium text-alt">Role</p>
                  <p className="body regular height-lg">Design Lead</p>
                </div>
                <div className="project-detail">
                  <p className="meta medium text-alt">Timeline</p>
                  <p className="body regular height-lg">2.5 months</p>
                </div>
              </div>
            </div>
            <div className="project-image hero-video animated-delay">
              <img src={HeroImage} alt="hero"/>
            </div>
          </div>
          <div className="text-section">
            <p className="display left regular height-lg">HeyDoctor functions as a virtual urgent care. Patients select a condition they have, answer a few questions, and are connected to a doctor. In telehealth, different states require different modes of communication when connecting with a doctor virtually. I was the design lead for the Visit Experience team that sought to make interactions between doctors and patients frictionless.</p>
            <p className="display left regular height-lg">During 2020 the business was keen on expanding coverage to all 50 states and investing heavily in marketing. The primary risk we faced was a low conversion rate in states that required video. I captured insights explaining why video calls in particular were often unsuccessful, then developed a new experience to connect patients to a doctor over video with minimal waiting.</p>
          </div>
        </main>
      <Footer/>
    </div>
  )
}

export default ProjVideo
import * as React from "react";

import "../styles/global.css";

import Navigation from "../components/nav";
import Footer from "../components/footer";

import Drink from "../images/drink.jpeg";
import Breakfast from "../images/breakfast.jpeg";
import Disc from "../images/disc.jpeg";
import Giants from "../images/giants.jpeg";
import Hike from "../images/hike.jpeg";
import Sandwich from "../images/sandwich.jpeg";
import Sitting from "../images/sitting.jpeg";

import CornholeMP4 from "../images/cornhole.mp4";
import CornholeWEBM from "../images/cornhole.mp4";


import ObiWan from "../images/obi-wan.gif";

const About = () => {
  return (
    <div>
        <title>Michael Watchmaker</title>
        <Navigation/>
        <main>
          <div className="header-section animated">
            <h1 className="left header-alt">Hello there.<span className="obi-wan"><img src={ObiWan} alt="obi-wan"/></span>I’m a California-based dude who loves to snack and fix things.</h1>
          </div>
          <div className="about-images animated-delay">
            <div className="about-images-left">
              <div className="about-images-section">
                <img src={Hike} alt="hike" className="image-tall"/>
                <img src={Sandwich} alt="sandwich" className="image-square"/>
              </div>
              <div className="about-images-section">
                <img src={Sitting} alt="sitting" className="image-tall"/>
                <img src={Disc} alt="disc throw" className="image-tall"/>
              </div>
            </div>
            <div className="about-images-right">
              <div className="about-images-section">
                <img src={Giants} alt="giants game" className="image-short"/>
                <img src={Breakfast} alt="breakfast" className="image-tall"/>
              </div>
              <div className="about-images-section images-last">
                <video playsInline autoPlay loop muted className="image-tall">
                  <source type="video/webm" src={CornholeWEBM}></source>
                  <source type="video/mp4" src={CornholeMP4}></source>
                </video>
                <img src={Drink} alt="drink" className="image-tall"/>
              </div>
            </div>
          </div>
          <div className="text-section">
            <p className="display left regular height-lg">I've spent a while building healthcare products that make it easier for people to access and afford treatments. While doing so, I developed an understanding of how to build intuitive and profitable experiences for the masses. I believe that determining what get's build is just as important as how it's built.</p>
            <p className="display left regular height-lg">Away from work, I enjoy spending time tinkering with side projects, traveling, and going on walks. I listen to a lot of dad rock on spotify, and watch Chelsea FC on the weekends.</p>
            <p className="display left regular height-lg">If you'd like to chat about work or sports, say 👋🏼&nbsp;<a className="link-md height-sm" href="mailto:michaelwatchmaker@icloud.com">hello</a>.</p>
          </div>
          <div className="split-section">
            <div className="split-section-left">
              <h2>Experience</h2>
              <p className="body left regular height-md text-alt">Take a peek at my&nbsp;
                <a className="link-md" href="https://drive.google.com/file/d/1de34roIluOb5ffRdNpmCMjn2YcAGnr_W/view?usp=sharing" target="_blank" rel="noreferrer">resume</a>
              </p>
            </div>
            <div className="split-section-right">
              <div className="content-block">
                <div className="current-badge">
                  <div className="bubble"></div>
                  <p className="meta medium left height-md" style={{color: '#2B9F60'}}>Current</p>
                </div>
                <p className="body left semibold height-md">Senior Product Designer&nbsp;<span style={{color: '#767680', fontWeight: 440}}>&nbsp;GoodRx</span></p>
                <p className="body left height-lg">Stood up <a className="link-md height-sm" href="https://www.goodrx.com/healthcare-professionals" target="_blank" rel="noreferrer">Provider Mode</a>, a new savings platform for doctors to help their patients afford their medications. With 500k+ healthcare providers on board, it’s the largest platform of it’s kind.</p>
              </div>
              <div className="content-block">
                <p className="body left semibold height-md">Product Designer&nbsp;<span style={{color: '#767680', fontWeight: 440}}>&nbsp;GoodRx</span></p>
                <p className="body left height-lg">Led projects for improving our visit experience on GoodRx Care, our telehealth product. My team went on to win an <a className="link-md height-sm" href="https://www.digitalhealthhub.org/awards/2020/winners" target="_blank" rel="noreferrer">award</a> for best telehealth company in 2020.</p>
              </div>
              <div className="content-block">
                <p className="body left semibold height-md">Product Designer&nbsp;<span style={{color: '#767680', fontWeight: 440}}>&nbsp;HeyDoctor</span></p>
                <p className="body left height-lg">Led design of the Electronic Medical Record (EMR) for clinicians to diagnose, treat, and e-prescribe to millions of patients. Designed regulatory experiences to scale the business to nationwide coverage.</p>
              </div>
            </div>
          </div>
          <div className="split-section">
            <div className="split-section-left">
              <h2>In the community</h2>
              <p className="body left regular height-md text-alt">Follow me on&nbsp;
                <a className="link-md" href="https://www.figma.com/@watchmaker" target="_blank" rel="noreferrer">Figma</a>
              </p>
            </div>
            <div className="split-section-right">
              <div className="content-block">
                <a className="body left semibold link-md height-md" href="https://www.figma.com/community/file/1238382497451166577/skeleton-kit" target="_blank" rel="noreferrer">Skeleton Kit</a>
                <p className="body left height-lg">Flexible skeleton loading components for building rich prototype experiences.</p>
              </div>
              <div className="content-block">
              <a className="body left semibold link-md height-md" href="https://www.figma.com/community/file/1243277831182040724/iphone-kit" target="_blank" rel="noreferrer">iPhone Kit</a>
                <p className="body left height-lg">Simple iPhone devices for bringing mobile designs to life.</p>
              </div>
            </div>
          </div>
        </main>
        <Footer/>
    </div>
  )
}

export default About
import * as React from "react";

import "../styles/global.css";

import Colorizer from "../components/colorizer";
import Navigation from "../components/nav";
import Footer from "../components/footer";

import ArrowRight from "../images/ArrowRight";

import NameScript from "../images/NameScript";
import Drink from "../images/drink.jpeg";
import Breakfast from "../images/breakfast.jpeg";
import DiscTwo from "../images/disc-2.jpeg";
import Giants from "../images/giants.jpeg";
import Hike from "../images/hike.jpeg";
import Sandwich from "../images/sandwich.jpeg";

const About = () => {
  return (
    <div>
        <title>Michael Watchmaker</title>
        <Colorizer
        hex= '#ffffff'
        />
        <Navigation
          theme="dark"
        />
        <main>
          <div className="text-section hello-about">
            <h1 className="center">Hello, my name is</h1>
            <NameScript/>
          </div>
          <div className="about-images">
            <div className="about-images-left">
              <div className="about-images-section">
                <img src={Drink} alt="drink" className="image-tall"/>
              </div>
              <div className="about-images-section">
                <img src={Sandwich} alt="sandwich" className="image-square"/>
                <img src={DiscTwo} alt="disc throw" className="image-tall"/>
              </div>
            </div>
            <div className="about-images-right">
              <div className="about-images-section">
                <img src={Breakfast} alt="breakfast" className="image-tall"/>
                <img src={Giants} alt="giants game" className="image-short"/>
              </div>
              <div className="about-images-section">
                <img src={Hike} alt="hike" className="image-tall"/>
              </div>
            </div>
          </div>
          <div className="text-section">
            <p className="display left semibold">I'm currently a Senior Product Designer at <a className="link" href="https://www.goodrx.com/about" target="_blank" rel="noreferrer">GoodRx</a> building Provider Mode, a tool for healthcare professionals helping patients access, afford, and adhere to their medications.</p>
            <p className="body left">One thing I've grown passionate about is building up other designers around me. I’ve released a few freebies to the Figma community, most notably the <a className="link" href="https://www.figma.com/community/file/1238382497451166577/Skeleton-Kit" target="_blank" rel="noreferrer">Skeleton Kit</a> and <a className="link" href="https://www.figma.com/community/file/1243277831182040724/iPhone-Kit" target="_blank" rel="noreferrer">iPhone Kit</a>. Check out some of my other work on my <a className="link" href="https://www.figma.com/@watchmaker" target="_blank" rel="noreferrer">profile</a>.</p>
            <p className="body left">When I’m not at my desk I enjoy 🍺 craft beer, 🥏 disc golf, 🚗 Rocket League, 🍜 noodles, and watching the ⚽️ US Men’s National Team.</p>
          </div>
          <div className="text-section">
            <h4>Experience</h4>
            <div className="experience-block">
              <p className="body left semibold text-alt">2021 <ArrowRight size={22}/> Present</p>
              <p className="body left">Recently, I’ve taken GoodRx Provider Mode from an idea to the largest provider platform in the United States. We released a <a className="link" href="https://drive.google.com/file/d/1HDe7d0UHXkI3fKUygWxkxUPHIK9zrLMq/view?usp=sharing" target="_blank" rel="noreferrer">video</a> for our investors and the public to learn more about it. To date, GoodRx has helped patients save over $50 billion on their prescriptions.</p>
            </div>
            <div className="experience-block">
              <p className="body left semibold text-alt">2019 <ArrowRight size={22}/> 2021</p>
              <p className="body left">At HeyDoctor I was on the design team for the Electronic Medical Record (EMR). It was a complex platform operating at the center of diagnosis, treatment, and customer support. My team supported 10x growth of visits volume, accumulating to over 2M consultations to date. After that, I led design for a team aimed at improving the visit experience for our patients. We went on to win an <a className="link" href="https://www.digitalhealthhub.org/awards/2020/winners" target="_blank" rel="noreferrer">award</a> for Best Telehealth Company in 2020 🏅.</p>
            </div>
          </div>
          <div className="text-section">
            <h4>Links</h4>
            <p className="body" style={{alignSelf: 'flex-start'}}><a className="link" href="https://drive.google.com/file/d/1de34roIluOb5ffRdNpmCMjn2YcAGnr_W/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>   /   <a className="link" href="https://www.figma.com/@watchmaker" target="_blank" rel="noreferrer">Figma</a>   /   <a className="link" href="https://www.linkedin.com/in/michaelwatchmaker/" target="_blank" rel="noreferrer">LinkedIn</a></p>
          </div>
        </main>
        <Footer/>
    </div>
  )
}

export default About
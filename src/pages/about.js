import * as React from "react";
import Navigation from "../components/nav";
import Footer from "../components/footer";
import "../styles/global.css";
import BeerPretzel from "../images/beer-pretzel.jpeg";
import Breakfast from "../images/breakfast.jpeg";
import DiscBag from "../images/disc-bag.jpeg";
import Giants from "../images/giants.jpeg";
import Hike from "../images/hike.jpeg";
import Sandwich from "../images/sandwich.jpeg";
import NameScript from "../images/NameScript";

const About = () => {
  return (
    <div>
        <Navigation/>
        <main>
          <div className="text-section">
            <h1 className="center">Hello, my name is</h1>
            <NameScript/>
          </div>
          <div className="about-images">
            <div className="about-images-left">
              <div className="about-images-section">
                <img src={BeerPretzel} alt="beer and pretzel" className="image-tall"/>
              </div>
              <div className="about-images-section">
                <img src={Sandwich} alt="sandwich" className="image-square"/>
                <img src={DiscBag} alt="disc bag" className="image-tall"/>
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
            <p className="display left semibold">I'm currently a Senior Product Designer at <a className="link" href="https://www.goodrx.com" target="_blank" rel="noreferrer">GoodRx</a> building Provider Mode for healthcare professionals helping their patients access, afford, and adhere to their medications.</p>
            <p className="body left">I’m passionate about building up other designers around me. I’ve released a few freebies to the Figma community recently, most notably the <a className="link" href="https://www.figma.com/community/file/1238382497451166577/Skeleton-Kit" target="_blank" rel="noreferrer">Skeleton Kit</a> and <a className="link" href="https://www.figma.com/community/file/1243277831182040724/iPhone-Kit" target="_blank" rel="noreferrer">iPhone Kit</a>. Check out some of my other work on my <a className="link" href="https://www.figma.com/@watchmaker" target="_blank" rel="noreferrer">profile</a>.</p>
            <p className="body left">When I’m not at my desk I enjoy 🍺 craft beer, 🥏 disc golf, 🚗 Rocket League, trying new food spots, and watching the ⚽️ US Men’s National Team.</p>
          </div>
          <div className="text-section">
            <p className="display left semibold">Experience</p>
            <div className="experience-block">
              <p className="body left semibold text-alt">2021 -{">"} Present</p>
              <p className="body left">Recently, I’ve taken GoodRx Provider Mode from an idea to one of the largest provider platforms in the United States. We released a video for our investors and the public to learn more about it.</p>
            </div>
            <div className="experience-block">
              <p className="body left semibold text-alt">2019 -{">"} 2021</p>
              <p className="body left">At HeyDoctor I was on the design team for the Electronic Medical Record (EMR). It was a complex platform operating at the center of diagnosis, treatment, and customer support. My team supported 10X growth of visits per day. After that, I led design for a team aimed at improving the visit experience for our patients. We went on to win an <a className="link" href="https://www.digitalhealthhub.org/awards/2020/winners" target="_blank" rel="noreferrer">award</a> for Best Telehealth Company in 2020 🏅.</p>
            </div>
          </div>
        </main>
        <Footer/>
    </div>
  )
}

export default About
import * as React from "react";
import Navigation from "../components/nav";
import Footer from "../components/footer";
import "../styles/global.css";
import BeerPretzel from "../images/beer-pretzel.jpg";
import Breakfast from "../images/breakfast.jpg";
import DiscBag from "../images/disc-bag.jpg";
import Giants from "../images/giants.jpg";
import Hike from "../images/hike.jpg";
import Sandwich from "../images/sandwich.jpg";

const About = () => {
  return (
    <div>
        <Navigation/>
        <main>
          <h1 className="center">A little more about me...</h1>
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
            <p className="display left semibold">I'm currently a Senior Product Designer at <span className="link">GoodRx</span> building <span className="link">Provider Mode</span> for healthcare professionals helping their patients access, afford, and adhere to their medications.</p>
            <p className="body left">During the holidays, people often ask me the same question: What do you do for work? I've never had a clear answer, and it changes depending on who's asking. Here's a couple things top of mind right now.</p>
            <p className="body left">I love tinkering with things in Figma — especially creating foundations for others to elevate their products. Some of the recent things I’ve released to the community are a flexible <span className="link">skeleton loading kit </span> and a basic <span className="link">iMessage kit</span>. You can check out some other doodads on my <span className="link">profile</span>.</p>
            <p className="body left">At <a href="https://www.heydoctor.co" target="_blank" rel="noreferrer" className="link">HeyDoctor</a> (now GoodRx Care) I led design for the Electronic Medical Record (EMR). It was a complex platform operating at the center of diagnosis, treatment, and customer support. My team supported growth from 100 to 1,000+ telehealth visits per day. I also led design for a team who’s soul purpose was improving the visit experience for our patients. We reimagined how our video consultations work, and it turned out pretty well. We won an <a href="https://www.digitalhealthhub.org/awards/2020/winners" target="_blank" rel="noreferrer" className="link">award</a> for Best Telehealth Company in 2020.</p>
            <p className="body left">Recently I’ve taken GoodRx Provider Mode from an idea to one of the largest provider platforms in the United States. We released a <a href="https://investors.goodrx.com/" target="_blank" rel="noreferrer" className="link">video</a> for our investors and the public to learn more about it.</p>
            <p className="body left">If you'd like to learn more, check out my <span className="link">resume</span> or reach out and <span className="link">say hi</span> 🤝🏼.</p>
          </div>
          <div className="text-section">
            <p className="display left semibold">Okay enough with the work talk...</p>
            <p className="body left">One of the lockdown hobbies I picked up is disc golf 🥏. I also got myself a set of cornhole boards and bags to hustle fellow beer drinkers on the weekends. Hit me up if you live close and want to play.</p>
            <p className="body left">I was one of the many thousand who explored bread science during our hibernation in 2020. I got pretty good at making brioche buns, and haven’t stopped iterating on pizza dough. You could say the kitchen island is my new creative frontier.</p>
          </div>
        </main>
        <Footer/>
    </div>
  )
}

export default About
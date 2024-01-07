import * as React from "react";

import "../styles/project.css";
import "../styles/global.css";

import Navigation from "../components/nav";
import Footer from "../components/footer";

import HeroImage from "../images/tile-search.jpg";

import Result1 from "../images/Search/result-1.jpg";
import Mobile1 from "../images/Search/mobile-1.jpg";
import Flow1 from "../images/Search/flow-1.jpg";


const ProjSearch = () => {
  return (
    <div>
      <title>Michael Watchmaker</title>
        <Navigation/>
        <main>
          <div className="project-section">
            <div className="project-header animated">
              <h1 className="left header-alt">Search</h1>
              <p className="display left height-sm text-alt">GoodRx</p>
            </div>
            <div className="project-image hero-image hero-search animated-delay">
              <img src={HeroImage} alt="hero"/>
            </div>
          </div>
          <div className="text-section">
            <p className="display left regular height-lg">GoodRx is a resource that helps uninsured or underinsured patients save on their prescriptions by providing coupons at thousands of pharmacies. I was the design lead on a new professional mode of the website, Provider Mode, aimed at helping doctors find savings for their patients.</p>
            <p className="display left regular height-lg">While working on the home page, one of the primary goals was assisting a doctor with performing a search. However, the existing search experience was confusing and difficult to use on mobile devices.</p>
          </div>
          <div className="project-section">
            <div className="split-section">
              <div className="split-section-left">
                <h2>Systematizing search result types</h2>
              </div>
              <div className="split-section-right">
                <p className="body regular height-lg">When a user searches GoodRx they can find medications, drug classes, or conditions. The existing experience provided similar visual treatment to all results leading to misclicks and confusion.</p>
                <p className="body regular height-lg">To fix this, I developed a system to help users better distinguish result types. By providing visual references via icons we were able to provide an anchor when scanning. For conditions and drug classes, we wanted to provide extra context to where they led to since medications were by far the most used. This work also helped other teams working on drug classes and conditions to gain new visitors through a more natural discovery path.</p>
              </div>
            </div>
            <div className="project-image">
              <img src={Result1} alt="result types"/>
            </div>
          </div>
          <div className="project-section">
            <div className="split-section">
              <div className="split-section-left">
                <h2>Crafting a new mobile experience</h2>
              </div>
              <div className="split-section-right">
                <p className="body regular height-lg">Doctors frequently have a lot to do with not enough time. The existing mobile search experience was cumbersome because it only displaying 2 results above the keyboard at a time. This forced users to type more characters before the correct result was in view.</p>
                <p className="body regular height-lg">The new experience provideed spacious tap targets and real estate. Additionally, the full screen overlay helped limit potential distractions underneath the results.</p>
              </div>
            </div>
            <div className="project-image">
              <img src={Mobile1} alt="mobile"/>
            </div>
          </div>
          <div className="project-section">
            <div className="split-section">
              <div className="split-section-left">
                <h2>Developing flows for efficiency</h2>
              </div>
              <div className="split-section-right">
                <p className="body regular height-lg">For power users, any ability for tools to expedite repetitive tasks is invaluable. That remains true with searching on our site.</p>
                <p className="body regular height-lg">To limit extra labor, we took a data-first approach to what content was surfaced. The most searched medications would appear on the home page one tap away. This allowed us to reduce the amount of effort needed for doctors to get to their destination.</p>
              </div>
            </div>
            <div className="project-image">
              <img src={Flow1} alt="mobile"/>
            </div>
          </div>
          <div className="text-section content-block">
            <p className="body left medium height-sm text-alt">Results</p>
            <p className="display left regular height-lg">Upon release, we noticed fewer characters needed to be typed before finding the correct result. Additionally, this update increased usage of our coupons down stream.</p>
          </div>
        </main>
      <Footer/>
    </div>
  )
}

export default ProjSearch
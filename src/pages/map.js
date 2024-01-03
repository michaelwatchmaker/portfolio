import * as React from "react";

import "../styles/project.css";
import "../styles/global.css";

import Navigation from "../components/nav";
import Footer from "../components/footer";

import HeroImage from "../images/tile-map.jpg";

import Reframing from "../images/Map/reframing.jpg";

import Mobile from "../images/Map/mobile.jpg";
import Headers from "../images/Map/headers.jpg";
import MapScreens from "../images/Map/map-screens.jpg";
import List from "../images/Map/list.jpg";
import MapBgMP4 from "../images/Map/map-bg.mp4";
import MapBgWEBM from "../images/Map/map-bg.webm";

import DrugPage from "../images/Map/drug-page.jpg";
import MiniMP4 from "../images/Map/mini-map.mp4";
import MiniWEBM from "../images/Map/mini-map.webm";




const ProjMap = () => {
  return (
    <div>
      <title>Michael Watchmaker</title>
        <Navigation/>
        <main>
          <div className="project-section">
            <div className="project-header animated">
              <h1 className="left header-alt">Pharmacy Map</h1>
              <p className="display left height-sm text-alt">GoodRx</p>
            </div>
            <div className="project-image hero-image hero-map animated-delay">
              <img src={HeroImage} alt="hero"/>
            </div>
          </div>
          <div className="text-section">
            <p className="display left regular height-lg">GoodRx is a resource that helps uninsured or underinsured patients save on their prescriptions by providing coupons at thousands of pharmacies. I was the design lead on a new professional mode of the website, Provider Mode, aimed at helping doctors find savings for their patients.</p>
            <p className="display left regular height-lg">I led research on understanding prescription decision making, then developed a solution to help unify affordability and e-prescribing workflows to reduce medication/pharmacy changes.</p>
          </div>
          <div className="project-section">
            <div className="split-section">
              <div className="split-section-left">
                <h2>Reframing the product flow for prescribers</h2>
              </div>
              <div className="split-section-right">
                <p className="body regular height-lg">The core product experience involves searching for a drug, selecting a pharmacy, and getting a coupon. Although this system worked well for patients, it wasn’t the most straightforward for doctors who were still deciding what to prescribe and where to send it.</p>
                <p className="body regular height-lg">I reframed the questions we ask users in our product to ones with a doctors lens. Doing this allowed the team to look at the current experience from a new angle to identify new opportunities for adjustment.</p>
              </div>
            </div>
            <div className="project-image">
              <img src={Reframing} alt="reframing the flow"/>
            </div>
          </div>
          <div className="project-section">
            <div className="split-section">
              <div className="split-section-left">
                <h2>Helping doctors find a location</h2>
              </div>
              <div className="split-section-right">
                <p className="body regular height-lg">Often times people coming to our site discover their “go-to” pharmacy isn’t the cheapest option. This means the EMR system the doctor uses to prescribe likely won’t have the address of the pharmacy already on file, and doctor typically won’t know the patient’s area well enough to choose a specific location for them.</p>
                <p className="body regular height-lg">Once a doctor selects a pharmacy, we had an opportunity to help them find a location for their patient — allowing us to transition them naturally from finding a price on our site, back to the EMR to prescribe.</p>
                <p className="body regular height-lg">The end result was an adapted coupon page to act more as a chain storefront that showed locations nearby as well as the coupon. Our proxy metric of success was when a doctor copied the address of a store to their clipboard.</p>
              </div>
            </div>
            <div className="project-image">
              <img src={Mobile} alt="mobile"/>
            </div>
            <div className="project-image">
              <img src={Headers} alt="page headers"/>
            </div>
            <div className="project-image">
              <img src={MapScreens} alt="map screens"/>
            </div>
            <div className="project-image">
              <img src={List} alt="list of pharmacies"/>
            </div>
            <div className="project-image">
              <video playsInline autoPlay loop muted>
                <source type="video/webm" src={MapBgWEBM}></source>
                <source type="video/mp4" src={MapBgMP4}></source>
              </video>
            </div>
          </div>
          <div className="project-section">
            <div className="split-section">
              <div className="split-section-left">
                <h2>Identifying additional product entry points</h2>
              </div>
              <div className="split-section-right">
                <p className="body regular height-lg">During research we noticed not all doctors clicked on a pharmacy, but could get the pricing information they needed by scanning.</p>
                <p className="body regular height-lg">This triggered explorations of integrating locations into our table of prices. To scale, I developed a mix of map backgrounds to represent a map with the pharmacy logo acting as the pin. The goal of this direction was to strike the balance of familiarity and new functionality let users discover naturally.</p>
              </div>
            </div>
            <div className="project-image">
              <img src={DrugPage} alt="drug page"/>
            </div>
            <div className="project-image">
              <video playsInline autoPlay loop muted>
                <source type="video/webm" src={MiniWEBM}></source>
                <source type="video/mp4" src={MiniMP4}></source>
              </video>
            </div>
          </div>
        </main>
      <Footer/>
    </div>
  )
}

export default ProjMap
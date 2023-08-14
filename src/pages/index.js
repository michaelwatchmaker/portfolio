import * as React from "react";
import { Link } from "gatsby";

import "../styles/global.css";

import Colorizer from "../components/colorizer";
import Navigation from "../components/nav";
import Footer from "../components/footer";

import Button from "../components/button";
import ProjectTile from "../components/projectTile";

import ArrowRight from "../images/ArrowRight";

import TilePromo from "../images/tile-promo.png";

import CornholeWEBM from "../images/cornhole.webm";
import CornholeMP4 from "../images/cornhole.mp4";
import Beer from "../images/beer.jpeg";
import Baseball from "../images/baseball.jpeg";
import DiscThrow from "../images/disc-throw.jpeg";

const Home = () => {
  return (
    <div>
      <title>Michael Watchmaker</title>
      <Navigation
        theme="dark"
      />
      <Colorizer
        hex= '#ffffff'
      />
      <main>
          <div className="tile-wrapper">
            <h1 className="left">Hi, I'm Michael <span className="header-emoji">✌🏼</span>
              <br/>
              <span className="header-alt">Product designer based in SF</span>
            </h1>
            <Link to="/video" className="tile-promo">
              <img src={TilePromo} alt="project tile"/>
              <div className="promo-header">
                  <p className="body bold" style={{color: '#16435A', opacity: .5}}>FEATURED</p>
                  <h3 className="promo-header-title">Video: <span style={{color: '#16435A'}}>Maintaining doctor efficiency and reducing wait times</span></h3>
              </div>
            </Link>
            <div className="project-tiles">
              <ProjectTile
                route="/search"
                status= "on"
                caption= "NEW"
                title="Search: A clarified, data-driven, mobile first update"
              />
              <ProjectTile
                route="/sandbox"
                status= "on"
                caption= "NEW"
                title="Sandbox: A collection of explorations from various projects"
              />
              <ProjectTile
                route="#"
                status= "off"
                caption= "COMING SOON"
                title="Alternatives: Making prescribing affordable medications easy"
              />
            </div>
          </div>
          <div className="section-about">
            <div className="section-content">
              <h2 className="left">When I’m not at my desk...</h2>
              <Link to="/about">
                <Button variant="button dark-alt">
                  About me
                  <ArrowRight/>
                </Button>
              </Link>
            </div>
            <div className="gallery">
              <img src={Baseball} alt="baseball" className="gallery-item a"/>
              <video playsInline autoPlay loop muted className="gallery-item b">
                <source type="video/webm" src={CornholeWEBM}></source>
                <source type="video/mp4" src={CornholeMP4}></source>
              </video>
              <img src={Beer} alt="beer" className="gallery-item c"/>
              <img src={DiscThrow} alt="disc-throw" className="gallery-item d"/>
            </div>
          </div>
        </main>
        <Footer/>
    </div>
  )
}

export default Home

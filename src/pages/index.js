import { Link } from "gatsby";
import * as React from "react";
import Colorizer from "../components/colorizer";
import Navigation from "../components/nav";
import Footer from "../components/footer";
import "../styles/global.css";
import Button from "../components/button";
import ArrowRight from "../images/ArrowRight";
import CornholeWEBM from "../images/cornhole.webm";
import CornholeMP4 from "../images/cornhole.mp4";
import Beer from "../images/beer.jpeg";
import Baseball from "../images/baseball.jpeg";
import DiscThrow from "../images/disc-throw.jpeg";
import "../styles/global.css";
import ProjectTile from "../components/projectTile";
import TileVideo from "../images/tile-video.png";
import TileSearch from "../images/tile-search.png";
import TileSandbox from "../images/tile-sandbox.png";

const Home = () => {
  return (
    <div>
      <Navigation
        theme="dark"
      />
      <Colorizer
        hex= '#ffffff'
      />
      <main>
          <h1 className="left">Sup, I'm Michael
            <br/>
            <span className="header-alt">I discover and solve people problems to drive business outcomes</span>
          </h1>
          <div className="tile-wrapper">
            <div className="project-tiles">
              <ProjectTile
                theme="blue"
                route="/video"
                title="Video"
                company="HeyDoctor"
                image={TileVideo}
              />
              <ProjectTile
                theme="purple"
                route="/search"
                title="Search"
                company="GoodRx"
                image={TileSearch}
              />
            </div>
            <ProjectTile
              theme="sandbox"
              route="/sandbox"
              title="Sandbox"
              image={TileSandbox}
            />
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
              <video autoPlay loop muted className="gallery-item b">
                <source src={CornholeWEBM}></source>
                <source src={CornholeMP4}></source>
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

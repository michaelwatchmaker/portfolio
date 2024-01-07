import * as React from "react";
import { Link } from "gatsby";

import "../styles/global.css";

import Navigation from "../components/nav";
import Footer from "../components/footer";

import ProjectTile from "../components/projectTile";

import TileVideo from "../images/tile-video.jpg";
import TileSearch from "../images/tile-search.jpg";
import TileMap from "../images/tile-map.jpg";

const Home = () => {
  return (
    <div>
      <title>Michael Watchmaker</title>
      <Navigation/>
      <main>
        <div className="header-section animated">
          <h1 className="left height-md">Hey, I’m Michael – a designer that develops systems to simplify complex things. Currently a Senior Product Designer at&nbsp;
            <a href="https://goodrx.com" target="_blank" rel="noreferrer" style={{width: 'fit-content'}} className="link-lg">
              <h1 className="height-sm">GoodRx</h1>
            </a>
            .
          </h1>
        </div>
          <div className="tile-wrapper animated-delay">
            <ProjectTile
              name="map"
              route="/map"
              img={TileMap}
            />
            <ProjectTile
              name="search"
              route="/search"
              img={TileSearch}
            />
            <ProjectTile
              name="video"
              route="/video"
              img={TileVideo}
            />
          </div>
          <div className="header-section">
            <h1 className="left header-alt">When I’m not at my desk, I enjoy <span style={{color: '#C29238'}}>🍺&nbsp;craft beer</span> <span style={{color: '#3287CC'}}>🥏&nbsp;disc golf</span>  <span style={{color: '#E4444E'}}>🚗&nbsp;Rocket League</span>  <span style={{color: '#C2B08D'}}>🍜&nbsp;noodles</span> and <span style={{color: '#6D6D76'}}>⚽️&nbsp;soccer</span>.</h1>
            <Link to="/about" style={{width: 'fit-content'}}>
              <p className="body medium link-md">About me</p>
            </Link>
          </div>
        </main>
        <Footer/>
    </div>
  )
}

export default Home

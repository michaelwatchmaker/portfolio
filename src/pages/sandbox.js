import * as React from "react";

import "../styles/project.css";

import Colorizer from "../components/colorizer";
import Navigation from "../components/nav";
import Footer from "../components/footer";

import ThumbnailWEBM from "../images/Sandbox/thumbnail.webm";
import MapWEBM from "../images/Sandbox/map.webm";
import TalkWEBM from "../images/Sandbox/talk.webm";
import SkeletonWEBM from "../images/Sandbox/skeleton.webm";

import ThumbnailMP4 from "../images/Sandbox/thumbnail.mp4";
import MapMP4 from "../images/Sandbox/map.mp4";
import TalkMP4 from "../images/Sandbox/talk.mp4";
import SkeletonMP4 from "../images/Sandbox/skeleton.mp4";

import Triage from "../images/Sandbox/triage.png";
import Icons from "../images/Sandbox/icons.png";

const ProjSandbox = () => {
  return (
    <div>
      <title>Michael Watchmaker</title>
      <Colorizer
        hex= '#1c1c1e'
      />
      <Navigation
        theme= "white"
      />
      <div className="project-header">
        <h1 className="project-title">Sandbox</h1>
      </div>
      <main>
        <div className="sandbox-gallery">
          <div className="sandbox-tile tile-a">
            <video playsInline autoPlay loop muted>
              <source type="video/webm" src={ThumbnailWEBM}></source>
              <source type="video/mp4" src={ThumbnailMP4}></source>
            </video>
          </div>
          <div className="sandbox-tile tile-b">
            <video playsInline autoPlay loop muted>
              <source type="video/webm" src={MapWEBM}></source>
              <source type="video/mp4" src={MapMP4}></source>
            </video>
          </div>
          <div className="sandbox-tile tile-c">
            <img src={Triage} alt="triage"/>
          </div>
          <div className="sandbox-tile tile-d">
            <img src={Icons} alt="icons"/>
          </div>
          <div className="sandbox-tile tile-e">
            <video playsInline autoPlay loop muted>
              <source type="video/webm" src={TalkWEBM}></source>
              <source type="video/mp4" src={TalkMP4}></source>
            </video>
          </div>
          <div className="sandbox-tile tile-f">
            <video playsInline autoPlay loop muted>
              <source type="video/webm" src={SkeletonWEBM}></source>
              <source type="video/mp4" src={SkeletonMP4}></source>
            </video>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default ProjSandbox
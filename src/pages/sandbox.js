import * as React from "react";

import "../styles/project.css";

import Colorizer from "../components/colorizer";
import Navigation from "../components/nav";
import Footer from "../components/footer";

import ThumbnailWEBM from "../images/sandbox/thumbnail.webm";
import MapWEBM from "../images/sandbox/map.webm";
import TalkWEBM from "../images/sandbox/talk.webm";
import SkeletonWEBM from "../images/sandbox/skeleton.webm";

import ThumbnailMP4 from "../images/sandbox/thumbnail.mp4";
import MapMP4 from "../images/sandbox/map.mp4";
import TalkMP4 from "../images/sandbox/talk.mp4";
import SkeletonMP4 from "../images/sandbox/skeleton.mp4";

import Triage from "../images/sandbox/triage.png";
import Icons from "../images/sandbox/icons.png";

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
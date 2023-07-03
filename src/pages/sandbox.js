import * as React from "react";
import Navigation from "../components/nav";
import Footer from "../components/footer";
import "../styles/project.css";
import Colorizer from "../components/colorizer";

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
            <video autoPlay loop muted>
              <source src={ThumbnailWEBM}></source>
              <source src={ThumbnailMP4}></source>
            </video>
          </div>
          <div className="sandbox-tile tile-b">
            <video autoPlay loop muted>
              <source src={MapWEBM}></source>
              <source src={MapMP4}></source>
            </video>
          </div>
          <div className="sandbox-tile tile-c">
            <img src={Triage}/>
          </div>
          <div className="sandbox-tile tile-d">
            <img src={Icons}/>
          </div>
          <div className="sandbox-tile tile-e">
            <video autoPlay loop muted>
              <source src={TalkWEBM}></source>
              <source src={TalkMP4}></source>
            </video>
          </div>
          <div className="sandbox-tile tile-f">
            <video autoPlay loop muted>
              <source src={SkeletonWEBM}></source>
              <source src={SkeletonMP4}></source>
            </video>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default ProjSandbox
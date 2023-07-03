import * as React from "react";
import Navigation from "../components/nav";
import Footer from "../components/footer";
import "../styles/project.css";
import Colorizer from "../components/colorizer";
import SummaryBrick from "../components/summaryBrick";
import SearchDevice from "../images/search-device.png";
import ResultTypes from "../images/result-types.png";

const ProjSearch = () => {
  return (
    <div>
      <Colorizer
        hex= '#8462E5'
      />
      <Navigation
        theme= "white"
      />
      <div className="project-header">
        <h1 className="project-title">Search<br/><span className="company purple-dark">GoodRx</span></h1>
        <ul className="project-details display semibold left">
          <li><span className="purple-dark">Role: </span>Design lead</li>
          <li><span className="purple-dark">Team: </span>Provider</li>
          <li><span className="purple-dark">Timeline: </span>3 months</li>
        </ul>
      </div>
      <main>
        <div className="text-section">
          <h2>Summary</h2>
          <SummaryBrick
            type="red"
            title="Problem"
            body="Video calls converted poorly on our telehealth product"
          />
          <SummaryBrick
            type="purple"
            title="Approach"
            body="I translated business needs into patient & doctor problems"
          />
          <SummaryBrick
            type="blue"
            title="Solution"
            body="My team scaffolded a new system and product experience for both users to connect with minimal waiting"
          />
          <SummaryBrick
            type="green"
            title="Outcome"
            body="Video call success nearly doubled"
          />
        </div>
        <div className="text-section">
          <h2>Section name</h2>
          <p className="body">This is some content.</p>
          <div className="project-image">
            <img src={SearchDevice} alt="search device"/>
            <p className="meta text-alt center">Some caption goes here.</p>
          </div>
          <div className="project-image">
            <img src={ResultTypes} alt="result types"/>
          </div>
        </div>
        <div className="text-section">
          <h2>Section name</h2>
          <p className="body">This is some content.</p>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default ProjSearch
import * as React from "react";

import "../styles/project.css";

import Colorizer from "../components/colorizer";
import { Link } from "gatsby";

const Apple = () => {
  return (
    <div>
      <title>Michael Watchmaker</title>
      <Colorizer
        hex= '#ffffff'
      />
      <main className="project-wrapper">
        <div className="text-section">
          <h2>Hi Apple 👋🏼</h2>
          <p className="display semibold">My name is <Link className="link" to="/">Michael Watchmaker</Link>, a Senior Product Designer at GoodRx. I’m eager to work together on building beautiful and powerful experiences for clinicians — something I’ve been working towards at GoodRx and HeyDoctor for the last 4.5 years.</p>
          <p className="body regular">One of the most challenging parts of working in healthcare as a designer is dealing with complexity of concepts, lack of interoperability, and evolving compliance standards. I’ve grown tired of working within an ancient system where I’m told “it is the way it is” and believe the team at Apple is where I can help break down some of the barriers keeping clinical software stuck in the past.</p>
          <div className="experience-block">
            <p className="body bold">EHR’s</p>
            <ul>
              <li className="body regular">Built an ICD-10 diagnosis + prescribing  experience for doctors to structure their decisions efficiently and ensure clinical consistency</li>
              <li className="body regular">Revamped medical history tracking using FHIR standards to keep patient information data clean</li>
              <li className="body regular">Integrated native video and phone call functionality</li>
            </ul>
          </div>
          <div className="experience-block">
            <p className="body bold">Doctor/Patient interactions</p>
            <ul>
              <li className="body regular">Designed GoodRx Provider Mode from 0 to 1, now the largest provider platform in the United States</li>
              <li className="body regular">Lead exploratory research and usability testing with doctors around the impact of price on prescribing decisions</li>
              <li className="body regular">Increased pricing accuracy when comparing multiple drugs by mapping quantity to days supply and designing a toggled interface</li>
            </ul>
          </div>
          <div className="experience-block">
            <p className="body bold">Compliance</p>
            <ul>
              <li className="body regular">Developed a symptom + condition filtration system to route patients to virtual or in person consultations</li>
              <li className="body regular">Worked with legal teams on state compliance laws to scale telehealth business to all 50 states</li>
              <li className="body regular">Tightened up patient ID verification flows</li>
            </ul>
          </div>
          <p className="body semibold">Let’s be real, most EHR’s and tools doctors rely on daily fall short on user experience. My background working in highly ambiguous clinical environments, coupled with a track record of business success makes me excited to define a new bar for what healthcare software can be.</p>
          <p className="body resular">Let's build something great. Together. <br/><br/> - Michael</p>
          <p className="body" style={{alignSelf: 'flex-start'}}><Link className="link" to="/">Work</Link>   /   <a className="link" href="https://drive.google.com/file/d/1de34roIluOb5ffRdNpmCMjn2YcAGnr_W/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>   /   <a className="link" href="https://www.linkedin.com/in/michaelwatchmaker/" target="_blank" rel="noreferrer">LinkedIn</a></p>
        </div>
      </main>
    </div>
  )
}

export default Apple
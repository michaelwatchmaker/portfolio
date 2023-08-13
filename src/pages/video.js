import * as React from "react";

import "../styles/project.css";

import Colorizer from "../components/colorizer";
import NavProject from "../components/nav-project";
import Footer from "../components/footer";

import Hero from "../images/Video/hero.png";

import Background from "../images/Video/background.png";
import OrigFlow from "../images/Video/original-flow.png";
import OrigScreens from "../images/Video/original-screens.png";
import OrigEMR from "../images/Video/original-emr.png";
import FlowVisit from "../images/Video/flow-visit.png";
import FlowStart from "../images/Video/flow-start.png";
import FlowJoin from "../images/Video/flow-join.png";

const ProjSearch = () => {
  return (
    <div>
      <title>Michael Watchmaker</title>
      <Colorizer
        hex= '#ffffff'
      />
      <NavProject
        project= "search"
      />
      <main className="project-wrapper">
        <div className="text-section hero-section">
          <div className="text-section-title">
            <h2>Video: Maintaining doctor efficiency and reducing wait times</h2>
            <p className="display medium text-alt">HeyDoctor | Design lead | 3 months</p>
          </div>
          <div className="project-image hero-image">
            <img src={Hero} alt="hero"/>
          </div>
        </div>
        <div className="text-section">
          <p className="display medium">Video calls converted poorly on our telehealth product. My team scaffolded a new system and product experience for both users to connect with minimal waiting. After release, video call success nearly doubled.</p>
        </div>
        <div className="text-section">
          <h4>Background</h4>
          <p className="body">HeyDoctor functions as a virtual urgent care. Patients come in for a “visit” where they fill out some questions about the condition they have, make a payment, and chat with a doctor about treatments.</p>
          <p className="body">Each state has it’s own requirements for acceptable patient-provider interactions: Chat, Phone, and Video. Doctors get paid for each “visit” they complete.</p>
          <div className="project-image">
            <img
              src={Background}
              alt="background"
            />
          </div>
        </div>
        <div className="text-section">
          <h4>Challenge</h4>
          <p className="body">The business wanted to focus on growth, but was hesitant to invest more in marketing in states requiring video calls since conversion was so low (~20%). If our team was able to fix some of the issues and bring conversion up to 30%, we could unlock marketing spend.</p>
        </div>
        <div className="text-section">
          <h4>Breaking things down</h4>
          <p className="body">Although we knew what outcome was desired, there was no clear path forward for fixing the experience. So, I chatted with some of the doctors using the platform and patient support staff about common issues involving using video.</p>
          <p className="body">I also wanted to visualize the system itself and connect what I heard to different steps in the process. This helped stakeholders as well as those working hands on gain some empathy with our users frustrations.</p>
          <div className="project-image">
            <img
              src={OrigFlow}
              alt="original flow"
            />
          </div>
          <div className="project-image">
            <img
              src={OrigScreens}
              alt="original screens"
            />
          </div>
          <div className="project-image">
            <img
              src={OrigEMR}
              alt="original emr"
            />
          </div>
        </div>
        <div className="text-section">
          <h4>Reframing the problems</h4>
          <p className="body">I took what we saw and heard, and translated product issues into tangible people problems. This helped me work with our business stakeholders to understand the underlying problems. Additionally, it helped build empathy within the team working on this project.</p>
          <p className="display semibold">Patients...don’t have time to wait around</p>
          <p className="display semibold">Doctors...don’t want to pick up video visits because they take so long</p>
        </div>
        <div className="text-section">
          <h4>A new system</h4>
          <p className="body">I took what we saw and heard, and translated product issues into tangible people problems. This helped me work with our business stakeholders to understand the underlying problems. Additionally, it helped build empathy within the team working on this project.</p>
          <div className="project-image">
            <img
              src={FlowVisit} 
              alt="flow visit"
            />
            <p className="meta text-alt center">The visit flow was simplified to let patients get their information submitted and not be held up by a video step.</p>
          </div>
          <div className="project-image">
            <img
              src={FlowStart}
              alt="flow start"
            />
            <p className="meta text-alt center">A doctor can start a call and work on other things while the patient get's set up and joins.</p>
          </div>
          <div className="project-image">
            <img
              src={FlowJoin}
              alt="flow join"
            />
            <p className="meta text-alt center">Once a patient is waiting, the doctor is notified and can join.</p>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default ProjSearch
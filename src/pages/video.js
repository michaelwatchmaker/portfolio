import * as React from "react";
import Navigation from "../components/nav";
import Footer from "../components/footer";
import "../styles/project.css";
import Colorizer from "../components/colorizer";
import SummaryBrick from "../components/summaryBrick";
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
      <Colorizer
        hex= '#3295C9'
      />
      <Navigation
        theme= "white"
      />
      <div className="project-header">
        <h1 className="project-title">Video<br/><span className="company blue-dark">HeyDoctor</span></h1>
        <ul className="project-details display semibold left">
          <li><span className="blue-dark">Role: </span>Design lead</li>
          <li><span className="blue-dark">Team: </span>Telehealth</li>
          <li><span className="blue-dark">Timeline: </span>2 months</li>
        </ul>
      </div>
      <main>
        <div className="text-section">
          <h2>Summary</h2>
          <SummaryBrick
            type="red"
            title="Challenge"
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
          <h2>Background</h2>
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
          <h2>Challenge</h2>
          <p className="body">The business wanted to focus on growth, but was hesitant to invest more in marketing in states requiring video calls since conversion was so low (~20%). If our team was able to fix some of the issues and bring conversion up to 30%, we could unlock marketing spend.</p>
        </div>
        <div className="text-section">
          <h2>Breaking things down</h2>
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
          <h2>Reframing the problems</h2>
          <p className="body">I took what we saw and heard, and translated product issues into tangible people problems. This helped me work with our business stakeholders to understand the underlying problems. Additionally, it helped build empathy within the team working on this project.</p>
          <p className="display semibold">Patients...don’t have time to wait around</p>
          <p className="display semibold">Doctors...don’t want to pick up video visits because they take so long</p>
        </div>
        <div className="text-section">
          <h2>Solution</h2>
          <h3>High level system</h3>
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
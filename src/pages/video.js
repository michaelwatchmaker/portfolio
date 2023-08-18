import * as React from "react";

import "../styles/project.css";

import Colorizer from "../components/colorizer";
import NavProject from "../components/nav-project";
import Footer from "../components/footer";

import Hero from "../images/video/hero.png";

import Background from "../images/video/background.png";
import OrigFlow from "../images/video/original-flow.png";
import OrigScreens from "../images/video/original-screens.png";
import OrigEMR from "../images/video/original-emr.png";

import FlowVisit from "../images/video/flow-visit.png";
import FlowStart from "../images/video/flow-start.png";
import FlowJoin from "../images/video/flow-join.png";

import Visit1 from "../images/video/visit-1.png";
import Visit2 from "../images/video/visit-2.png";

import Message1 from "../images/video/message-1.png";
import Message2 from "../images/video/message-2.png";
import Message3 from "../images/video/message-3.png";

import Call1 from "../images/video/call-1.png";
import Call2 from "../images/video/call-2.png";
import Call3 from "../images/video/call-3.png";
import Call4 from "../images/video/call-4.png";
import Call5 from "../images/video/call-5.png";
import Call6 from "../images/video/call-6.png";
import Call7 from "../images/video/call-7.png";


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
          <p className="body">We knew we had to get rid of the wait room since it was the most damaging part of the experience. Video was moved from being a step of a patient visit, and integrated into a method of communication. From a product strategy perspective, it also allowed us to utilize our video platform for more scenarios (more on that later).</p>
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
        <div className="text-section">
          <h4>The visit</h4>
          <p className="body">We learned through research about the importance of being notified of an incoming call. Our approach was to send a text message to alert the patient so they didn’t need to keep their browser open while waiting for a doctor to review their case. This allowed the patient to go about other activities until a doctor was ready to chat. However, we needed to verify phone numbers that involved links to a secure call between a patient and doctor, so we added a verification step to the flow.</p>
          <div className="project-image">
            <img
              src={Visit1} 
              alt="phone verification"
            />
          </div>
          <p className="body">It was important to us that we set the right expectations once we knew the patient was in a state that required a video call. So we spelled out a few simple steps for them of what was going to happen after submitting their visit for review.</p>
          <div className="project-image">
            <img
              src={Visit2} 
              alt="expectations"
            />
          </div>
        </div>
        <div className="text-section">
          <h4>Message Center</h4>
          <p className="body">After a patient submitted their information, they needed to explicitly send us a message to start a visit (per our legal team). We had an opportunity to remove some of the confusion associated with needed to type out yes, and also provide some clarity on when they will hear from a real doctor. This prevented our patients from feeling abandoned and limited calls to our support line.</p>
          <div className="project-image">
            <img
              src={Message1} 
              alt="message intro"
            />
          </div>
          <p className="body">When the doctor wanted to ask if the patient was available for a call, our goal was to reduce the amount of labor and maintain consistency. We utilized snippets (templated messages with custom variables) to help doctors perform this task with one click. For personalization, we utilized the first name variable. This was a nice way to curate the message without needing to worry about misspelling.</p>
          <div className="project-image">
            <img
              src={Message2}
              alt="message ready"
            />
          </div>
          <div className="project-image">
            <img
              src={Message3}
              alt="message personalization"
            />
          </div>
        </div>
        <div className="text-section">
          <h4>The call</h4>
          <p className="body">Once the doctor and patient confirmed availability, the doctor could initiate a video call with one click in their EMR. This triggered a video message to be sent in the chat, and a SMS as a backup in case they weren’t actively in the browser.</p>
          <div className="project-image">
            <img
              src={Call1} 
              alt="video bubble"
            />
          </div>
          <div className="project-image">
            <img
              src={Call2}
              alt="notifications"
            />
          </div>
          <p className="body">While the doctor waited for the patient to open the link and get set up, they could continue to work on other patients asynchronously. The video call status at the bottom would follow them around as they work so they didn’t need to worry about missing the patient joining.</p>
          <div className="project-image">
            <img
              src={Call3}
              alt="call setup"
            />
          </div>
          <p className="body">When the patient joins, the doctor is notified by the status banner. At this point they can wrap up their current work and join the call. We included a counter of how long the patient is waiting for them so we could provide a sense of urgency. For the action, it was important for doctors to get re-oriented to the patient’s case so we had it open the chart rather than jumping right into the call.</p>
          <div className="project-image">
            <img
              src={Call4}
              alt="ready to join"
            />
          </div>
          <div className="project-image">
            <img
              src={Call5}
              alt="banner behavior"
            />
          </div>
          <p className="body">Finally, the doctor and patient can have their conversation. When it’s over, we wanted to maintain historical context within the chat interface, and also document on visits where a call is required so others in the practice can get the full context.</p>
          <div className="project-image">
            <img
              src={Call6}
              alt="on call"
            />
          </div>
          <div className="project-image">
            <img
              src={Call7}
              alt="call ended"
            />
          </div>
        </div>
        <div className="text-section">
          <h4>Outcomes</h4>
          <p className="body"><span className="bold">The team was excited to hear that video call success rose from 20% to 38%.</span> Additionally, there was an added benefit of being able to use video as an additional tool for non required visits. If a doctor wanted to get more information from a patient in a visual way, it was simple to start a new room and connect with a patient.</p>
        </div>
        <div className="text-section">
          <h4>Follow ups</h4>
          <p className="body">The conversion problem was fixed, but the experience had room for improvement. During the development and testing of our concepts, we heard that doctors wanted the ability to blur out or cover their backgrounds. This would help with providing a consistent experience for patient and allow providers to feel like they have privacy since many worked on our platform from home.</p>
          <p className="body">Additionally, there was interest from patients in scheduling time with a doctor of when they’re free. It’s not the best use of doctor time to coordinate with a patient, then remember to call at that time. In order to do scheduling right there was a lot of additional research needed, so we decided to keep it as a follow up item.</p>
          <p className="body">There were also a few issues we encountered and needed to fix during the roll out. First, we didn’t have a good understanding of call quality. To gain insight the team worked on asking the patient to tap emojis on how the quality was. We could use this as a baseline to monitor if we made performance upgrades later. Secondly, some patients would come to us with conditions late at night when very few, if any, doctors were online. We made some adjustments to copy in order to set the right expectations when clinical volume decreased (around 7pm).</p>
        </div>
        <div className="text-section">
          <h4>Learnings</h4>
          <p className="body"><span className="bold">Product experiences aren’t limited to direct interaction with the software we build.</span> As designers we typically think about the screen being the experience, however this project helped me realize it goes beyond the screen. Designing the larger system and thinking about the experience away from the screen was crucial to success. Sometimes it’s the stuff we can’t track which can have the biggest impacts.</p>
          <p className="body"><span className="bold">Changing the larger system, where possible, can be better than building things to undo/explain.</span> This project helped me understand the planning/resourcing that goes into strategic product decisions. Once I helped the team understand the foundational issues with the video system, I was met with a bit of pushback on scope. The team was able match the LOE for making big changes with the risks of remaining in the current system through research. This created a much stronger case for additional time/resources to see the project through.</p>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default ProjSearch
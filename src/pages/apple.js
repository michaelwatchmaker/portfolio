import * as React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

import "../styles/project.css";

import Colorizer from "../components/colorizer";

const Apple = () => {
  return (
    <div>
      <title>Michael Watchmaker</title>
      <Helmet>
        <meta name={`robots`} content={`noindex, nofollow`} />
      </Helmet>
      <Colorizer
        hex= '#ffffff'
      />
      <main className="project-wrapper">
        <div className="text-section">
          <h2>Hi Apple 👋🏼</h2>
          <p className="display semibold">My name is <Link className="link" to="/">Michael Watchmaker</Link>, a Senior Product Designer at GoodRx. I’m eager to work together on building beautiful and powerful experiences for clinicians — something I’ve been driving at GoodRx and HeyDoctor for the last 4.5 years.</p>
          <p className="body regular">Building healthcare products is particularly challenging given complexity of concepts, lack of interoperability, and evolving regulatory standards. I’ve grown comfortable navigating this ambiguous and complex space through my ability to drive clarity with internal clinical experts, engineering + data teams, and legal counsel. Being able to pull together individuals with deep knowledge in certain areas has allowed me to transform complex concepts into digestible and predictable experiences.</p>
          <p className="body regular">I bring with me years of experience meeting business targets while maintaining clinical efficacy and compliance when projects hit a snag. My ability to be flexible when needed, work through issues collaboratively, and (most importantly) get the team aligned again are muscles I’ve developed since working on high visibility projects. A few clinical projects I’ve been the design lead for are below:</p>
          <div className="experience-block">
            <p className="body bold">EHR’s</p>
            <ul>
              <li className="body regular">Built an ICD-10 (International Classification of Diseases, Tenth Revision) diagnosis + prescribing experience for doctors to structure their decisions efficiently and ensure clinical consistency</li>
              <li className="body regular">Revamped medical history tracking using FHIR (Fast Healthcare Interoperability Resources) standards to keep patient data clean</li>
              <li className="body regular">Integrated native video and phone call functionality to support nationwide expansion and additional treatment types</li>
            </ul>
          </div>
          <div className="experience-block">
            <p className="body bold">Doctor/Patient interactions</p>
            <ul>
              <li className="body regular">Designed GoodRx Provider Mode, a prescription savings platform, from 0 to 1 — now the largest provider platform in the United States</li>
              <li className="body regular">Led exploratory research and usability testing with doctors around the impact of price on prescribing decisions and presented to executives + cross functional partners</li>
              <li className="body regular">Systematized medication quantities to increase pricing accuracy for doctors comparing multiple medications in the same class</li>
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
          <p className="body regular">When I think about an environment where I can take that next step in my career, I imagine a place where builders like myself are empowered to push the boundaries of healthcare software. I find that my teams produce the best results when I’m able to be the conduit between the clinical experts, business stakeholders, and engineering teams. I believe that building the right product is just as important as building the product right. To that end, I can see myself excelling in a place where my teammates care deeply about fixing the problems in healthcare and are eager to build something revolutionary.</p>
          <p className="body semibold">Let’s be real, most EHR’s and tools doctors rely on daily have a high learning curve and consist of rigid workflows. My background working in highly ambiguous clinical environments, coupled with a track record of business success can help Apple take the next step in elevating healthcare software.</p>
          <p className="body regular">Let's build something great. Together. <br/><br/> - Michael</p>
          <p className="body" style={{alignSelf: 'flex-start'}}><Link className="link" to="/">Work</Link>   /   <a className="link" href="https://drive.google.com/file/d/1de34roIluOb5ffRdNpmCMjn2YcAGnr_W/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>   /   <a className="link" href="mailto:michaelwatchmaker@icloud.com">Email</a></p>
        </div>
      </main>
    </div>
  )
}

export default Apple
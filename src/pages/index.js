import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Button from "../components/button";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navigation from "../components/nav";
import ProjectPreview from "../components/project-preview";
import "../styles/global.css";

const IndexPage = () => {
  return (
    <div>
      <Navigation/>
      <main>
        <Hero>Hi 👋, I’m Michael.<br></br><span className="title-alt">I discover and design simple solutions to complex problems.</span></Hero>
        <ProjectPreview
          name="A new approach to telehealth video visits"
          description="Waiting rooms suck. Hear about how I was able to reduce wait times for patients and keep doctors productive."
          page="/project"
          variant="project-image red"
        >
          <StaticImage 
            src="../images/project.png"
            alt="Phone"
            layout="constrained"
            height={400}
          />
        </ProjectPreview>
        <ProjectPreview
          name="A new approach to telehealth video visits"
          description="Waiting rooms suck. Hear about how I was able to reduce wait times for patients and keep doctors productive."
          page="/project"
          variant="project-image reverse blue"
        >
          <StaticImage 
            src="../images/project.png"
            alt="Phone"
            layout="constrained"
            height={400}
          />
        </ProjectPreview>
        <Button variant="alt">
          <Link to="/about">About Me</Link>
        </Button>
      </main>
      <Footer/>
    </div>
  )
}

export default IndexPage

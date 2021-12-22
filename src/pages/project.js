import * as React from "react";
import HeroImage from "../components/hero-image";
import Navigation from "../components/nav";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css";

const ProjectPage = () => {
  return (
    <div>
        <Navigation/>
        <main>
            <HeroImage type="hero-image-wrapper purple">
                <StaticImage 
                    src="../images/project.png"
                    alt="Phone"
                    layout="constrained"
                    height={400}
                />
            </HeroImage>
            <article>
                <section>
                    <h1 className="title">Project Title</h1>
                </section>
                <section>
                    <p className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At semper arcu facilisis sed ut. Volutpat amet ullamcorper euismod amet, amet, amet felis. Egestas in mauris imperdiet elit in. Parturient consectetur ac ornare facilisi nulla vitae maecenas consectetur. Enim elementum est diam nam dignissim arcu. Parturient tristique pharetra auctor turpis. Lectus quis quis egestas velit, dictum magna fermentum ut eu.</p>
                    <p className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At semper arcu facilisis sed ut. Volutpat amet ullamcorper euismod amet, amet, amet felis. Egestas in mauris imperdiet elit in. Parturient consectetur ac ornare facilisi nulla vitae maecenas consectetur. Enim elementum est diam nam dignissim arcu. Parturient tristique pharetra auctor turpis. Lectus quis quis egestas velit, dictum magna fermentum ut eu.</p>
                    <p className="meta meta-alt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At semper arcu facilisis sed ut. Volutpat amet ullamcorper euismod amet, amet, amet felis. Egestas in mauris imperdiet elit in. Parturient consectetur ac ornare facilisi nulla vitae maecenas consectetur. Enim elementum est diam nam dignissim arcu. Parturient tristique pharetra auctor turpis. Lectus quis quis egestas velit, dictum magna fermentum ut eu.</p>
                </section>
                <section>
                    <p className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At semper arcu facilisis sed ut. Volutpat amet ullamcorper euismod amet, amet, amet felis. Egestas in mauris imperdiet elit in. Parturient consectetur ac ornare facilisi nulla vitae maecenas consectetur. Enim elementum est diam nam dignissim arcu. Parturient tristique pharetra auctor turpis. Lectus quis quis egestas velit, dictum magna fermentum ut eu.</p>
                </section>
            </article>
        </main>
    </div>
  )
}

export default ProjectPage
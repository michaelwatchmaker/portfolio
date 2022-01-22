import * as React from "react";
import HeroImage from "../components/hero-image";
import Navigation from "../components/nav";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css";
import Footer from "../components/footer";
import { Link } from "gatsby";

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
                    height={500}
                />
            </HeroImage>
            <article>
                <section>
                    <h1 className="title">Project Title</h1>
                    <p className="body body-alt medium">September 2021</p>
                    <p className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At semper arcu facilisis sed ut. Volutpat amet ullamcorper euismod amet, amet, amet felis. Egestas in mauris imperdiet elit in.</p>
                </section>
                <section>
                    <h2 className="section">Discovery & Definition</h2>
                    <p className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At semper arcu facilisis sed ut. Volutpat amet ullamcorper euismod amet, amet, amet felis. Egestas in mauris imperdiet elit in. Parturient consectetur ac ornare facilisi nulla vitae maecenas consectetur. Enim elementum est diam nam dignissim arcu. Parturient tristique pharetra auctor turpis. Lectus quis quis egestas velit, dictum magna fermentum ut eu.</p>
                    <p className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At semper arcu facilisis sed ut. Volutpat amet ullamcorper euismod amet, amet, amet felis. Egestas in mauris imperdiet elit in. Parturient consectetur ac ornare facilisi nulla vitae maecenas consectetur. Enim elementum est diam nam dignissim arcu. Parturient tristique pharetra auctor turpis. Lectus quis quis egestas velit, dictum magna fermentum ut eu.</p>
                    <div className="project-image grey">
                        <StaticImage
                            src="../images/article.png"
                            alt="Testing article mock"
                            layout="constrained"
                            height={400}
                        />
                        <p className="meta medium meta-alt">This is a caption for an image</p>
                    </div>
                </section>
                <section>
                    <h2 className="section">Testing Elements</h2>
                    <p className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At semper arcu facilisis sed ut. Volutpat amet ullamcorper euismod amet, amet, amet felis. Egestas in mauris imperdiet elit in. Parturient <Link to="#" className="link">consectetur ac ornare</Link> facilisi nulla vitae maecenas consectetur. Enim elementum est diam nam dignissim arcu. Parturient tristique pharetra auctor turpis. Lectus quis quis egestas velit, dictum magna fermentum ut eu.</p>
                        <p className="body body-alt quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At semper <span className="bold">arcu facilisis sed ut.</span> Volutpat amet ullamcorper euismod amet, amet, amet felis.</p>
                    <p className="body">Aenean tempus congue justo, nec posuere elit. In lobortis ipsum id dolor pretium, tempus pharetra orci eleifend. In vitae auctor eros, vitae eleifend tellus. Sed nibh libero, molestie sit amet neque vel, lacinia facilisis nibh. Phasellus congue augue sit amet fermentum scelerisque. Nunc vitae sagittis odio. Fusce a rutrum sapien, et euismod nulla. Vivamus condimentum nec sem ut euismod. Sed eu augue non velit suscipit consectetur id eu diam. Nunc sit amet tempus velit, at gravida ex. Morbi venenatis, leo quis laoreet pharetra, elit arcu venenatis massa, et semper urna ligula quis lectus. Aliquam quis aliquet orci.</p>
                </section>
            </article>
        </main>
        <Footer/>
    </div>
  )
}

export default ProjectPage
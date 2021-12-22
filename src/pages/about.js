import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Button from "../components/button";
import HeroImage from "../components/hero-image";
import Navigation from "../components/nav";
import "../styles/global.css";

const AboutPage = () => {
  return (
    <div>
        <Navigation/>
        <main>
            <HeroImage type="hero-image-wrapper none">
                <StaticImage 
                    src="../images/grid.png"
                    alt="Phone"
                    layout="constrained"
                    height={400}
                />
            </HeroImage>
            <article>
                <section>
                    <h2 className="section">A little about me</h2>
                    <p className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At semper arcu facilisis sed ut. Volutpat amet ullamcorper euismod amet, amet, amet felis. Egestas in mauris imperdiet elit in. Parturient consectetur ac ornare facilisi nulla vitae maecenas consectetur. Enim elementum est diam nam dignissim arcu. Parturient tristique pharetra auctor turpis. Lectus quis quis egestas velit, dictum magna fermentum ut eu.</p>
                    <Button variant="alt">
                        <Link to="#">Get in touch</Link>
                    </Button>
                </section>
            </article>
        </main>
    </div>
  )
}

export default AboutPage
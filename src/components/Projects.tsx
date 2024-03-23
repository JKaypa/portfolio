import ProjectImage from "./projects/projects-image";
import travelingNerd from "../assets/projects/travelling-nerd.png";
import "../styles/projects.css";

export default function Projects() {
  return (
    <section className="projects-section">
      <h1 className="projects-title">Look at my projects</h1>
      <picture className="projects-project_images">
        <ProjectImage image={travelingNerd} />
        <ProjectImage image={travelingNerd} />
      </picture>
    </section>
  );
}

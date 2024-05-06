import ProjectImage from "./projects/projects-image";
import { travellingNerd } from "../helpers/base-image-url";
import "../styles/projects.css";
import { Description } from "../helpers/project-description";

export default function Projects() {
  return (
    <section className="projects-section">
      <h1 className="projects-title">Look at my projects</h1>
      <picture className="projects-project">
        <ProjectImage
          image={travellingNerd}
          title="TravelingNerd"
          description={Description.travellingNerd}
        />
        <ProjectImage
          image={travellingNerd}
          title="TravelingNerd"
          description={Description.travellingNerd}
        />
        <ProjectImage
          image={travellingNerd}
          title="TravelingNerd"
          description={Description.travellingNerd}
        />
        <ProjectImage
          image={travellingNerd}
          title="TravelingNerd"
          description={Description.travellingNerd}
        />
      </picture>
    </section>
  );
}

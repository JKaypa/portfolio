import "../../styles/projects.css";

export default function ProjectImage({ image }: { image: string }) {
  return (
    <picture>
      <img src={image} alt={image} className="project-image" />
    </picture>
  );
}

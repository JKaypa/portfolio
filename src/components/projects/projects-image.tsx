import "../../styles/projects.css";

export default function ProjectImage({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <h1 className="projects-project_title">{title}</h1>
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className="projects-project_image"
        data-content={description}
      />
    </div>
  );
}

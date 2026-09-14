const projects = [
  {
    title: "Specd",
    image: "/specs-preview.png",
    description: "Social platform for car enthusiasts. Post builds and track its progress, host and discover local meets, and connect with other like minded people.",
    tech: "React, Node JS, CSS",
    github: "https://github.com/YOUR_USERNAME/specs"
  },
  {
    title: "FiledIt",
    image: "/filedit-preview.png",
    description: "Web app to organize job applications. Keep track of each job, the posting, requirements, resume and cover letter uploaded, and status of application.",
    tech: "React, Node JS, CSS",
    github: "https://github.com/YOUR_USERNAME/filedit"
  }
]

function Projects() {
  return (
    <div className="projects">
      <h1 className="projects-heading">My Work(s)</h1>
      <div className="projects-list">
        {projects.map((project) => (
          <div className="project-item" key={project.title}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-title">
                {project.title} ↗
              </a>
              <p className="project-description">{project.description}</p>
              <p className="project-tech">{project.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
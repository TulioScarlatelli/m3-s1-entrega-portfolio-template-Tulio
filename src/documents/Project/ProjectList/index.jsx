import { projects } from "../../../data/projects"
import { ProjectCard } from "./ProjectCard"

export const ProjectList = () => {
    return(
        <ul>
            {projects.map(project => (
                <ProjectCard key={project.name} project={project}/>
            ))}
        </ul>
    )
}
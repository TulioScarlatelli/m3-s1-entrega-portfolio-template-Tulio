export const ProjectCard = ({project}) => {
    return(
        <li>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
        </li>
    )
}
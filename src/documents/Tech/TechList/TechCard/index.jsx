export const TechCard = ({techCard}) => {
    return(
        <li>
            <h2>{techCard.name}</h2>
            <img src={techCard.img} alt={techCard.name} />
        </li>
    )
}
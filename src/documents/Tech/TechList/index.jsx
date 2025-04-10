import { technologies } from "../../../data/technologies.js"
import { TechCard } from "./TechCard"

export const TechList = () => {
    return(
        <ul>
            {technologies.map(card => (
                <TechCard key={card.name} techCard={card}/>
            ))}
        </ul>
    )
}
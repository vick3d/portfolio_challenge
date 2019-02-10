import React from "react"

const ExperienceList = (props) => {
    let experience = props.experience
    return (
        <div class="story">
            <div class="leftStory">
                <h3>{experience.position}</h3>
                <h4 class="year">{experience.period} <br></br>{experience.company}</h4>        
            </div>
            <div class="rightStory">
                <p>{experience.descr}</p>
            </div>
        </div>
    )
}


export default ExperienceList
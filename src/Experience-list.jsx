import React from "react"

const ExperienceList = (props) => {
    let experience = props.experience
    return (
        <div key={experience.id}>
            <div className="story">
                <div className="leftStory text-white">
                    <h2>{experience.period}<br></br> {experience.company}</h2>
                    <h3>{experience.position}</h3>

                </div>
                <div className="rightStory text-white">
                    <p>{experience.descr}</p>
                </div>
            </div> 
        </div>
    )
}

export default ExperienceList
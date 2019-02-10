import React from "react"

const EducationList = (props) => {
    let education = props.education
    return (       
            <div className="story">
                <div className="leftStory text-white">
                    <h3>{education.education}</h3>
                    <h4>{education.period}<br></br>{education.school}</h4>                 
                </div>
                <div className="rightStory text-white">
                    <p>{education.descr}</p>
                </div>
            </div> 
    )
}

export default EducationList
import React, {Component} from "react"
import axios from "axios"
import ExperienceList from "./Experience-list"


class Experiences extends Component {
    constructor() {
        super();
        this.state = {
            experiences: []
        };
    }

    componentDidMount() {
        axios.get('./src/data/experiences.json')
            .then(response => {
                this.setState({
                    experiences: response.data
                })
            })
    }

    render() {
        const experiences = this.state.experiences
        let experienceList

        if(experiences.length > 0) {
            experienceList = experiences.map(experience => {
                return (
                    <div key={experience.id}>
                        <ExperienceList experience={experience} />
                    </div>
                )
            })
        }

        return (
            <div>{experienceList}</div>  
        )
    }
};

export default Experiences
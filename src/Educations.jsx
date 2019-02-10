import React, {Component} from "react"
import axios from "axios"
import EducationList from "./Education-list"



class Educations extends Component {
    constructor() {
        super();
        this.state = {
            educations: []
        };
    }

    componentDidMount() {
        axios.get('./src/data/educations.json')
            .then(response => {
                this.setState({
                    educations: response.data
                })
            })
    }

    render() {
        const educations = this.state.educations
        let educationList

        if(educations.length > 0) {
            educationList = educations.map(education => {
                return (
                    <div key={education.id}>
                        <EducationList education={education} />                       
                    </div>
                )
            })
        }

        return (
            <div>{educationList}</div>
        )
    }
};

export default Educations
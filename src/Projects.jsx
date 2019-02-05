import React, {Component} from "react"
import axios from "axios"
import ProjectCard from "./ProjectCard"
import { UndrawDashboard } from "react-undraw-illustrations";




class Projects extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        axios.get('./src/data/projects.json')
            .then(response => {
                this.setState({
                    projects: response.data
                })
            })
    }

    render() {
                const projects = this.state.projects
        let projectsList

        if(projects.length > 0) {
            projectsList = projects.map(project => {
                return (
                    <div key={project.id} className="min-h-900 my-1 px-1 w-full md:w-1/2 lg: my-4 lg:px-4 lg:w-1/3">
                        <ProjectCard project={project} />
                       
                    </div>
                )
            })
        }

        return (
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                {projectsList}
            </div>
            
        )
    }
};

export default Projects
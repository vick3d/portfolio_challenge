import React from "react"
import { UndrawDesignerLife } from 'react-undraw-illustrations';


const About = () => {
    return (
        <div className="content-wrapper">
            <div className="flex flex-wrap mb-4">
                <div className="w-full lg:w-1/4 md:w-1/2">
                    <UndrawDesignerLife primaryColor='#12283a' height='200px' />
                </div>
                <div className="w-full lg:w-3/4 md:w-1/2">
                    <h1 className="content-text">About me</h1>
                <p className="content-text"> 
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Mollitia consequuntur maiores explicabo dolorem adipisci iure quaerat ullam incidunt perferendis, 
                    asperiores aperiam accusamus voluptates ex commodi nesciunt quis doloremque doloribus ipsa?
                </p>
                </div>
            </div>
        </div>
    )
};

export default About
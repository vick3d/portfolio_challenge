import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter} from "react-router-dom"
import './css/tailwind.css'
import './css/parallax.css'
import './css/slider.css'
import ProjectSlides from "./Slider"
import Header from "./Header"
import About from "./About"
import ImageBreak from "./ImageBreak"
import Experiences from "./Experiences"
import Educations from "./Educations"
import Hello from "./Hello"
import Footer from "./Footer"


const App = () => {
    
    const slides = [
        {
          project: 'FizzBuzz',
          language: 'JavaScript',
          img: 'https://anckor.cdn.prismic.io/anckor/cda974367bd7caffa2165b3805378d12167e9935_7-waves.jpg',
        },
        {
          project: 'Address-Book',
          language: 'JavaScript',
          img: 'https://www.cumminsandwhite.com/wp-content/uploads/2017/03/Black-Desk-Background.jpg',
        },
        {
          project: 'BMI-Calculator',
          language: 'JavaScript',
          img: 'https://www.santam.co.za/assets/img/home/risk-1.jpg',
        },
];
    return (
        <div>
            <Header />
            <section id="Home" className="parallax-section" >
                <Hello />
            </section>
            <section id="Projects" className="text-block2">
                <ProjectSlides slides={slides}/>
            </section>
            <section className="parallax-section">
                <ImageBreak />
            </section>
            <section id="About" className="text-block">
                <div class="leftSide">
                        <About /> 
                    <h3 className="headerTitle pl-4 lname">Work</h3>               
                        <Experiences />
                    <br></br>
                    <br></br>
                    <h3 className="headerTitle pl-4 lname">Education</h3>
                        <Educations /> 
                </div>       
            </section>
            <Footer />
        </div>
    )
};

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
),  document.getElementById("app"));
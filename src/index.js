import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter} from "react-router-dom"
// import { Switch, Route } from "react-router-dom"
import './css/tailwind.css'
import './css/parallax.css'
import './css/slider.css'
import ProjectSlides from "./Slider"
import Header from "./Header"
import About from "./About"
import ImageBreak from "./ImageBreak"
import Parallax from "./Parallax"
import Experiences from "./Experiences"
import Hello from "./Hello"
import Footer from "./Footer"


const App = () => {
    
    const slides = [
        {
          city: '',
          country: 'FizzBuzz in JavaScript',
          img: 'https://anckor.cdn.prismic.io/anckor/cda974367bd7caffa2165b3805378d12167e9935_7-waves.jpg',
        },
        {
          city: '',
          country: 'Address-Book in JavaScript',
          img: 'https://anckor.cdn.prismic.io/anckor/c413486a042000e79a6f0fb4b3e74ad381989be7_1-beach.jpg',
        },
        {
          city: '',
          country: 'BMI-Calculator in JavaScript',
          img: 'https://anckor.cdn.prismic.io/anckor/255231e801a040e2a4f72aaa69a1edea5bc9a152_13-work-session.jpg',
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
                    <About />
                    <Experiences />
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
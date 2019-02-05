import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter} from "react-router-dom"
import { Switch, Route } from "react-router-dom"
import './css/tailwind.css'
import './css/parallax.css'
import Header from "./Header"
import About from "./About"
import Projects from "./Projects"
import Hello from "./Hello"
import Footer from "./Footer"


const App = () => {
    return (
        <div>
            <Header />
            <section className="parallax-section" >
                <div className=" image-block parallax1" data-speed=".5">
                    <div>
                        <h1>Viktors Portfolio</h1>
                        <span> - "The best way to get a project done faster is to start sooner" </span>
                    </div>
                </div>
            </section>
            <section id="Projects" className="text-block">
                <h2>Projects</h2>
                <p>This is a showcase of my current work.
                </p>
            </section>
            <section className="parallax-section">
                <div className=" image-block parallax2"  data-speed=".5">
                    <h1>Fullstack Web developer</h1>
                    <span>HTML5 CSS REACT RUBY JAVASCRIPT</span>
                </div>
            </section>
             <section id="About" className="text-block">
                <h2>About me</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aliquam incidunt, nesciunt id culpa nobis eius nemo recusandae dicta alias, voluptatum nisi unde consequatur? Perspiciatis incidunt tempora qui laboriosam modi?</p>
            </section>
        </div>
        // <div className="page-wrapper">
        //     <div className="page-content">
        //         
        //         <div className="content-wrapper">
        //             <Switch>
        //                 <Route exact path='/' component={Hello}></Route>
        //                 <Route exact path='/About' component={About}></Route>
        //                 <Route exact path='/Projects' component={Projects}></Route>
        //             </Switch>
        //         </div>
        //         <Footer />
        //     </div>  
        // </div>

    )
};

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
),  document.getElementById("app"));
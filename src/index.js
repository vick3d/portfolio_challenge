import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter} from "react-router-dom"
import { Switch, Route } from "react-router-dom"
import './css/tailwind.css'
import Header from "./Header"
import About from "./About"
import Projects from "./Projects"
import Hello from "./Hello"
import Footer from "./Footer"


const App = () => {
    return (
        <div className="page-wrapper">
            <div className="page-content">
                <Header />
                <div className="content-wrapper">
                    <Switch>
                        <Route exact path='/' component={Hello}></Route>
                        <Route exact path='/' component={About}></Route>
                        <Route exact path='/' component={Projects}></Route>
                    </Switch>
                </div>
                <Footer />
            </div>  
        </div>

    )
};

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
),  document.getElementById("app"));
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Skills from './Pages/Skills/Skills';
import Projects from './Pages/Projects/Projects';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/Contact/Contact';
import Navbar from './Shared/Navbar/Navbar';
import AboutMe from './Pages/AboutMe/AboutMe';
import Footer from './Shared/Footer/Footer';

function App() {
  return (
    <div >
      <Router>
        <Navbar></Navbar>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/aboutme">
            <AboutMe />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </Router>
    </div>
  );
}

export default App;

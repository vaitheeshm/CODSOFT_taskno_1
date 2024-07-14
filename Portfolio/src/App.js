import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// COMPONENTS
import LandingPageComponent from './components/LandingPage';
import AboutMeComponent from './components/AboutMe';
import SkillsComponent from './components/skills';
import ProjectsComponent from './components/projects';
import ContactMeComponent from './components/ContactMe';
import FooterComponent from './components/Footer';
import NavBarComponent from './components/Navbar';

// CSS FILES
import './App.css';
import './Responsive/responsive1024px.css'
import './Responsive/responsive768px.css'
import './Responsive/responsive568px.css'

function App() {
    return (
        <Router>
            <div className="App">
                <NavBarComponent />
                <Routes>
                    <Route path="/" element={<LandingPageComponent />} />
                    <Route path="/about" element={<AboutMeComponent />} />
                    <Route path="/skills" element={<SkillsComponent />} />
                    <Route path="/projects" element={<ProjectsComponent />} />
                    <Route path="/contact" element={<ContactMeComponent />} />
                </Routes>
                <FooterComponent />
            </div>
        </Router>
    );
}

export default App;

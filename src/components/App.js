import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Curriculumvitae from './Curriculumvitae';
import Bio from './Bio';
import Navigation from './Navigation';
import Title from './Title';
import Projects from './Projects';


import projectList from '../data/projects';
import Contactinfo from './Contactinfo';


import { useState } from 'react';
import { useInView } from 'react-intersection-observer';


function App() {
  const [projects, setProjects] = useState(projectList);


  // Destructure useInview for referencing the sections
  const { ref: projRef, inView: projInView, projEntry } = useInView();
  const { ref: bioRef, inView: bioInView, bioEntry } = useInView();
  const { ref: cvRef, inView: cvInView, cvEntry } = useInView();

 
  return (
    <div className="App" id="top-anchor">
      <Navigation />
      <section className="section-title">
        <div className="content"> 
          <Title />
        </div>
        <div className={`projects-wrapper ${projInView ? "show" : "hidden"}`}  ref={projRef}>
          <Projects projects={projects}/>
        </div>
      </section>
      <section className="section-bio" id="bio-anchor">
        <div className={`bio-container ${bioInView ? "show" : "hidden"}`} ref={bioRef}>
          <Bio />
        </div>
      </section>
      <section className="section-cv"id="cv-anchor">
        <div className={`cv-container ${cvInView ? "show" : "hidden"}`} ref={cvRef}>
          <Curriculumvitae />
        </div>
      </section>
      <Contactinfo />
    </div>
  );
}


export default App;
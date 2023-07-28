import '../css/Project.css';
import { useRef } from 'react';

const ProjectsMobile = (props) => {
    const projectsRef = useRef(props.projects)

    const handleTouch = (url) => {
        window.open(url);
    }

    return (
        <div className="projects-wrapper">
            {projectsRef.current.map((proj) => (
                <div className="project" key={proj.id}>
                    <div className='project-splitter'>
                    <img 
                    onTouchEnd={() => handleTouch(proj.url)} 
                    src={proj.img} 
                    alt="alt"/>
                    </div>
                    <p className="project-text">
                        {proj.text}
                    </p>    
                </div>
            ))}
        </div>
      );
}
 

export default ProjectsMobile;
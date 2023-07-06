import '../css/Project.css';
import { useState, useRef } from 'react';

const Projects = (props) => {
    const projectsRef = useRef(props.projects)

    const [hovering, setIsHovering] = useState("")

    const handleClick = (url) => {
        window.open(url);
    }

    const handleOnMouseEnter = (projectId) => {
        setIsHovering(projectId);
    }

    const handleOnMouseLeave = () => {
        setIsHovering("");
    }
 

    return (
        <div className="projects-wrapper">
            {projectsRef.current.map((proj) => (
                
                <div className="project" key={proj.id}>
                    <div className='project-splitter'>
                    <img 
                    onClick={() => handleClick(proj.url)} 
                    onMouseEnter={() => handleOnMouseEnter(proj.id)}
                    onMouseLeave={() => handleOnMouseLeave()}
                    src={proj.img} 
                    alt="alt"/>
                    {(hovering === proj.id) && <img 
                    onClick={() => handleClick(proj.altUrl)} 
                    onMouseEnter={() => handleOnMouseEnter(proj.id)}
                    onMouseLeave={() => handleOnMouseLeave()}
                    src={proj.altImg} 
                    alt="alt"/>}
                    </div>
                    <p className="project-text">
                        {proj.text}
                    </p>
                    
                </div>
            ))}
        </div>
      );
}
 

export default Projects;
import { useState } from 'react';

const Projects = (props) => {
    const projects = props.projects;

    const handleClick = (url) => {
        window.open(url);
    }

  
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    return (
        <div className="projects-container">
            {projects.map((proj) => (
                <div className="project" key={proj.id}>
                    <img 
                    onClick={() => handleClick(proj.url)} 
                    src={proj.img} 
                    alt="Your mom"/>
                    <img 
                    onClick={() => handleClick(proj.altUrl)} 
                    src={proj.altImg} 
                    alt="Your mom"/>
                    <p className="project-text">
                        {proj.text}
                    </p>
                    
                </div>
            ))}
        </div>
      );
}
 
export default Projects;

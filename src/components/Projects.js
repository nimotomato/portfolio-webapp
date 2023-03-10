import '../css/Project.css';


const Projects = (props) => {
    const projects = props.projects;


    const handleClick = (url) => {
        window.open(url);
    }
 

    return (
        <div className="projects-wrapper">
            {projects.map((proj) => (
                <div className="project" key={proj.id}>
                    <img 
                    onClick={() => handleClick(proj.url)} 
                    onMouseLeave={e => e.currentTarget.src = proj.img}
                    onMouseEnter={e => e.currentTarget.src = proj.altImg}
                    src={proj.img} 
                    alt="alt"/>
                    <p className="project-text">
                        {proj.text}
                    </p>
                    
                </div>
            ))}
        </div>
      );
}
 

export default Projects;
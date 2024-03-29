import '../css/Contactinfo.css';


import contactInfo from "../data/contactInfo";


import { BsLinkedin, BsGithub } from "react-icons/bs";


const Contactinfo = () => {
    const info = contactInfo;

    
    return ( 
        <div className="contact-info-container" id="contact-anchor">
            <p className="email-info">{ info.email }</p>
            <a className="linkedin-info" href={ info.linkedIn }><BsLinkedin size={28}/></a>
            <a className="github-info" href={info.github}><BsGithub style={{ color: 'black' }} size={28}/></a>
        </div>
     );
}
 

export default Contactinfo;
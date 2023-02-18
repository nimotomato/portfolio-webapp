import contactInfo from "./data/contactInfo";

import { BsLinkedin } from "react-icons/bs";

const Contactinfo = () => {
    const info = contactInfo;
    return ( 
        <div className="contact-info-container" id="contact-anchor">
            <p className="email-info">{ info.email }</p>
            <a className="linkedin-info" href={ info.linkedIn }><BsLinkedin size={28}/></a>
        </div>
     );
}
 
export default Contactinfo;
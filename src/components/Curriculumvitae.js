import '../css/Curriculumvitae.css';
import '../css/Jobs.css';
import '../css/Education.css';


import Education from './Education';
import Jobs from './Jobs';


const Curriculumvitae = () => {
    return (
        <div className="cv-container">
            <h1 className="job-header">Work life experience:</h1>
            <h1 className="edu-header">Formal education:</h1>
            <Jobs />         
            <Education />
        </div>
      );
}
 
export default Curriculumvitae;
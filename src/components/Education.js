import eduList from "../data/eduData";


const Education = () => {
    const eduData = eduList;


    return ( 
        <div className="edu-container">
            {eduData.map((edu) => {
                return (
                    <div className="edu-info" key={edu.id}>
                    <h3 className="edu-company">
                        {edu.schoolName}
                    </h3>
                    <h4 className="edu-programme">
                        {edu.programName}
                    </h4>
                    <p className="edu-period">
                        {edu.period}
                    </p>
                </div>
                )}
            )}
        </div>
     );
}
 

export default Education;
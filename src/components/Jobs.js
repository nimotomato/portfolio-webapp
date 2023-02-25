import jobList from "../data/jobData";


const Jobs = () => {
    const jobData = jobList;


    return ( 
        <div className="jobs-container">
            {jobData.map((job) => {
                return (
                    <div className="job-info" key={job.id}>
                        <h3 className="job-company">
                            {job.companyName}
                        </h3>
                        <h4 className="job-title">
                            {job.title}
                        </h4>
                        <p className="job-period">
                            {job.period}
                        </p>
                    </div>
            )}
            )}
        </div>
     );
}
 

export default Jobs;
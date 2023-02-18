import selfie from './img/selfie.jpg';
import biotext from './data/biotext';

const Bio = () => {


    return (
        <div className="bio-container">
            <img className="portrait" src={selfie} alt="Picture of me"></img>
            <div className="text-container">
                <p className="bio-text">
                    {biotext[0]} 
                </p>
                <p className="bio-text">
                    {biotext[1]} 
                </p>
            </div>
        </div>
      );
}
 
export default Bio;
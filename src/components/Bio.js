import '../css/Bio.css';


import selfie from '../img/selfie.jpg';
import biotext from '../data/biotext';


const Bio = () => {


    return (
        <div className="bio-wrapper">
            <img className="portrait" src={selfie} alt="Picture of me"></img>
                <p className="bio-text-1">
                    {biotext[0]} 
                </p>
                <p className="bio-text-2">
                    {biotext[1]} 
                </p>
            </div>
      );
}

 
export default Bio;
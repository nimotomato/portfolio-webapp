import '../css/Bio.css';


import selfie3 from '../img/selfie3.jpg';
import biotext from '../data/biotext';


const Bio = () => {
    return (
        <div className="bio-wrapper">
            <img className="portrait" src={selfie3} alt="martin"></img>
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
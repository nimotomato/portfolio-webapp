import github from '../img/github.jpg';
import IITH from '../img/IITH.jpg';
import pong from '../img/pong.jpg';
import spotifyBot from '../img/spotifyBot.jpg';

const projectList = [
    { 
      url: "https://isitgoingtohell-lzrwjhdvn-nimotomato.vercel.app/",
      img: IITH,
      text: "Sentiment analysis",
      altImg: github, 
      altUrl: "https://github.com/nimotomato/isitgoingtohell-webpage-portfolio",
      id: 1
    }, 
    { 
      url: "https://open.spotify.com/playlist/2iz1IxBJVzcmnOrPDxQfYj?si=2eef6e14a3304d56",
      img: spotifyBot,
      text: "Spotify bot",
      altImg: github, 
      altUrl: "https://github.com/nimotomato/DiscoverLongly",
      id: 2
    }, 
    { 
      url: "https://pong-ten-plum.vercel.app/",
      img: pong,
      text: "Pong single player",
      altImg: github, 
      altUrl: "https://github.com/nimotomato/pong-portfolio",
      id: 3
    }  
  ];

export default projectList;
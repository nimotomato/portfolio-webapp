import github from "../img/github.jpg";
import IITH from "../img/IITH.jpg";
import pong from "../img/pong.jpg";
import githubpong from "../img/githubpong.jpg";
import stroop from "../img/stroop.jpg";

const projectList = [
  {
    url: "https://isitgoingtohell.vercel.app/",
    img: IITH,
    text: "Sentiment analysis",
    altImg: github,
    altUrl: "https://github.com/nimotomato/isitgoingtohell-webpage-portfolio",
    id: 1,
  },
  {
    url: "https://stroop.vercel.app/",
    img: stroop,
    text: "Neuropsych test",
    altImg: github,
    altUrl: "https://github.com/nimotomato/stroop",
    id: 2,
  },
  // {
  //   url: "https://pong-ten-plum.vercel.app/",
  //   img: pong,
  //   text: "Pong single player",
  //   altImg: githubpong,
  //   altUrl: "https://github.com/nimotomato/pong-portfolio",
  //   id: 3,
  // },
];

export default projectList;

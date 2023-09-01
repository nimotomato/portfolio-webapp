import github from "../img/github.jpg";
import IITH from "../img/IITH.jpg";
import dnd from "../img/dnd.png"
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
  {
    url: "https://github.com/nimotomato/dnd-map-tool",
    img: dnd,
    text: "Map (under construction)",
    altImg: github,
    altUrl: "https://github.com/nimotomato/dnd-map-tool",
    id: 3,
  }
];

export default projectList;

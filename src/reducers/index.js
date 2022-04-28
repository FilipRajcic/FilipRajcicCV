import { combineReducers } from "redux";
import React from "react";
import "./Reducer.css";

const skillsImg = require("../images/skills.png");
const nodejsImg = require("../images/nodejs.png");

const screensReducer = () => {
  return [
    {
      title: "Contact",
      content: (
        <div className="reducer__contact">
          <h3 className="reducer__header--3">Phone Number</h3>
          <p className="reducer__paragraph">+381-64-068-4009</p>

          <h3 className="reducer__header--3">Email</h3>
          <p className="reducer__paragraph">filiprajcic7@gmail.com</p>

          <h3 className="reducer__header--3">Address</h3>
          <p className="reducer__paragraph">Dr Nika Miljanića 6/2</p>
        </div>
      ),
    },
    {
      title: "Skills",
      content: (
        <div className="reducer__skills">
          <img
            className="reducer__image"
            src={skillsImg}
            alt="SkillsImage"
          ></img>
        </div>
      ),
    },
    {
      title: "Other",
      content: (
        <div className="reducer__other">
          <h3 className="reducer__header--3">Driving Licence (Category B)</h3>
        </div>
      ),
    },
    {
      title: "Education",
      content: (
        <div className="reducer__education">
          <hr className="reducer__hr" />
          <h3 className="reducer__header--3">High School</h3>
          <p className="reducer__paragraph">
            Study Program: Nurse - nurse technician
          </p>
          <p className="reducer__paragraph">Medical School Ćuprija</p>
          <p className="reducer__paragraph">2014-2018</p>
          <hr className="reducer__hr" />
          <h3 className="reducer__header--3">Faculty</h3>
          <p className="reducer__paragraph">
            Study Program: Applied Mathematics
          </p>
          <p className="reducer__paragraph">Faculty of Mathematics Belgrade</p>
          <p className="reducer__paragraph">2018-ongoing</p>
          <hr className="reducer__hr" />
          <h3 className="reducer__header--3">Udemy</h3>
          <p className="reducer__paragraph">Html, Css, JS, Sass, Git, React</p>
          <p className="reducer__paragraph">2020-ongoing</p>
          <hr className="reducer__hr" />
        </div>
      ),
    },
    {
      title: "Portfolio",
      content: (
        <div className="reducer__portfolio">
          <a
            className="reducer__link"
            href="https://madlaps.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Madlaps
          </a>
          <a
            className="reducer__link"
            href="https://browsegames.netlify.app"
            target={"_blank"}
            rel="noreferrer"
          >
            BrowseGames (JS)
          </a>

          <a
            className="reducer__link"
            href="https://rockpaperss.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Rock Papper Scissors (JS)
          </a>
          <a
            className="reducer__link"
            href="https://ytapireact.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            My YouTube (React)
          </a>
        </div>
      ),
    },
    {
      title: "About Me",
      content: (
        <div className="reducer__about">
          <h3 className="reducer__header--3">Social skills and competencies</h3>
          <p className="reducer__paragraph">- Communicative</p>
          <p className="reducer__paragraph">- Open to new ideas</p>
          <p className="reducer__paragraph">
            - Active participant in conversations and creating new ideas
          </p>
          <p className="reducer__paragraph">- Team player</p>
          <p className="reducer__paragraph">- Always willing to improve</p>
        </div>
      ),
    },
    {
      title: "Languages",
      content: (
        <div className="reducer__language">
          <h3 className="reducer__header--3">English (B2)</h3>
        </div>
      ),
    },
    {
      title: "Whats next?",
      content: (
        <div className="reducer__whats">
          <h3 className="reducer__header--3">Node Js</h3>
          <p className="reducer__paragraph reducer__center">
            Front-end is amazing, but im not going to stop there, im so hungry
            for more knowledge and i think the next step is back-end
            development.
          </p>
          <img className="reducer__img" src={nodejsImg} alt="nodejs"></img>
        </div>
      ),
    },
  ];
};

const selectedScreenReducer = (selectedScreen = null, action) => {
  switch (action.type) {
    case "SCREEN_SELECT":
      return action.payload;
    default:
      return selectedScreen;
  }
};

export default combineReducers({
  screens: screensReducer,
  selectedScreen: selectedScreenReducer,
});

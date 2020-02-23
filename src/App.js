import React from 'react';
import { FaGithub } from "react-icons/fa"
import './App.css';

const TOTAL_EXPERIENCE = 6.9;
const skills = [
  {
    title: 'JavaScript',
    stars: 4
  },
  {
    title: 'React JS',
    stars: 4
  },
  {
    title: 'React Hooks',
    stars: 4
  },
  {
    title: 'HTML',
    stars: 3
  },
  {
    title: 'CSS',
    stars: 4
  },
  {
    title: 'Redux',
    stars: 4
  },
  {
    title: 'ES6',
    stars: 4
  },
  {
    title: 'Jest',
    stars: 3
  },
  {
    title: 'Jasmine',
    stars: 3
  },
  {
    title: 'Webpack',
    stars: 3
  },
  {
    title: 'Node JS',
    stars: 2
  },
  {
    title: 'Babel',
    stars: 2
  },
  {
    title: 'ESLint',
    stars: 2
  }
];

const tools = [
  {
    title: 'VS Code',
    stars: 4
  },
  {
    title: 'Sublime Text',
    stars: 3
  },
  {
    title: 'GIT',
    stars: 4
  },
  {
    title: 'MS Office',
    stars: 3
  },
  {
    title: 'Jenkins',
    stars: 2
  },
  {
    title: 'JIRA',
    stars: 3
  },
  {
    title: 'Invision',
    stars: 2
  }
];

function App() {
  return (
    <div className="ResumeContainer">
      <div className="Resume">
        <div className="Header">
          <div>
            <img className="Photo" src={require('./img/photo.jpg')} alt="Proile" />
          </div>
          <div className="NameContainer">
            <div className="Name"> Amit Chauhan </div>
            <div className="SubTitle"> Front-end Developer </div>
            <div className="About">
              {/* Innovative, dynamic and quick learner Front-end Developer with {TOTAL_EXPERIENCE} years of experience in building
              scalable, usable and well-constructed websites and applications. */}
              Passionate developer who loves to write readable, scalable, high performance and testable code with {TOTAL_EXPERIENCE} in various frontend technologies and domains like banking, travel, insight analytics. Enjoys helping with colleagues and online users.
            </div>
          </div>
        </div>

        <div className="ResumeContent">
          <div className="Side">
            <div className="Title">
              <div className="EmailPhone">
                <div className="flex">
                  <i className="icon">email</i>
                  <a className="SimpleLink" href="mailto:a.a.chauhan2009@gmail.com">
                    a.a.chauhan2009@gmail.com
                  </a>
                </div>
                <div className="flex">
                  <i className="icon">phone</i> 9840806628
                </div>
                <div className="flex">
                  <i className="icon">room</i> Wadgaon Sheri, Pune - 411014
                </div>
                <div className="flex">
                  <i className="icon">language</i> English, Hindi, Gujarati
                </div>
                <div className="flex">
                  <i className="icon">public</i> <a className="SimpleLink" href="https://amitchauhan.tech/"> amitchauhan.tech </a>
                </div>
                <div className="flex">
                  <div className="icon"><FaGithub /></div> <a className="SimpleLink" href="https://github.com/aachauhan2009/"> github.com/aachauhan2009 </a>
                </div>
              </div>
              <div className="TechnicalSkill">
                <div className="SideHeading flex">
                  <i className="icon">code</i> <span className="uppercase"> Technical Skills </span>
                </div>

                {skills.map(({ title, stars }) => (
                  <div className="Skill" key={title}>
                    <span> {title} </span>
                    {/* <span>
                      {new Array(Math.floor(stars)).fill("").map((_, index) => {
                        return <i key={index} className="icon">star</i>;
                      })}
                    </span> */}
                  </div>
                ))}
              </div>

              <div className="TechnicalSkill">
                <div className="SideHeading flex">
                  <i className="icon">build</i> <span className="uppercase"> Tools </span>
                </div>

                {tools.map(({ title, stars }) => (
                  <div className="Skill" key={title}>
                    <span> {title} </span>
                    {/* <span>
                      {new Array(Math.floor(stars)).fill("").map((_, index) => {
                        return <i key={index} className="icon">star</i>;
                      })}
                    </span> */}
                  </div>
                ))}
              </div>

              <div className="Education">
                <div className="SideHeading flex">
                  <i className="icon">school</i> <span className="uppercase"> Education </span>
                </div>
                <div className="Course bold">
                  B.E in Electronics and Communication
                </div>
                <div className="School">@ Shantilal Shah Engineering college, Bhavnagar, Gujarat </div>
                <div className="CourseDuration">2008 - 2012</div>
              </div>
            </div>
          </div>

          <div className="Main">
            <div className="Heading flex">
              <i className="icon icon--24">work</i> <span className="uppercase"> Experience </span>
            </div>
            <div className="Experience">
              <div className="ExperienceItem">
                <span className="ExperienceTitle">
                  <span className="bold"> Senior Frontend Engineer </span> @ Market Logic Software
                <span className="ExperienceDuration">11-2019 to present</span>
                </span>
                <ul className="ExperienceDescription">
                  <li><i className="icon">keyboard_arrow_right</i>Added new features to existing application</li>
                  <li><i className="icon">keyboard_arrow_right</i>Introduced React Testing library to add integration tests</li>
                  <li><i className="icon">keyboard_arrow_right</i>Understood micro-frontend architecture and helped other teammates to understand</li>
                </ul>
              </div>

              <div className="ExperienceItem">
                <span className="ExperienceTitle">
                  <span className="bold"> Frontend Developer </span> @ Flight Network
                <span className="ExperienceDuration">10-2017 to 10-2019</span>
                </span>
                <div className="bold">Flight Network Website</div>
                <ul className="ExperienceDescription">
                  <li><i className="icon">keyboard_arrow_right</i>Played major role in re-branding legacy design to modern design</li>
                  <li><i className="icon">keyboard_arrow_right</i>
                    Co-created themeable css design system to easily create and apply new theme using css-grid, scss and
                    css-modules
                  </li>
                  <li><i className="icon">keyboard_arrow_right</i>
                    Introduced code splitting to reduce bundle size and increased site speed along with pre-rendering of
                    home page for SEO
                  </li>
                  <li><i className="icon">keyboard_arrow_right</i>
                    Upgraded React to 16.8.3 from 15, Introduced React Hooks for team and took hands on session on react
                    hooks
                  </li>
                </ul>
                <div className="bold">Mark-up Portal UI</div>
                <ul className="ExperienceDescription">
                  <li><i className="icon">keyboard_arrow_right</i>Migrated old monolithic app to React app</li>
                  <li><i className="icon">keyboard_arrow_right</i>Introduced new features like bulk update and advance client side validation with tables</li>
                </ul>
              </div>

              <div className="ExperienceItem">
                <span className="ExperienceTitle">
                  <span className="bold"> Associate Projects </span> @ Cognizant
                <span className="ExperienceDuration">08-2016 to 09-2018</span>
                </span>
                <div className="bold">Banking Application</div>
                <ul className="ExperienceDescription">
                  <li><i className="icon">keyboard_arrow_right</i>Developed new features for banking applications using in-house jQuery based framework.</li>
                  <li><i className="icon">keyboard_arrow_right</i>Helped other team mates to solve technical problems</li>
                </ul>
              </div>

              <div className="ExperienceItem">
                <span className="ExperienceTitle">
                  <span className="bold">Software Engineer </span> @ American Megatrends
                <span className="ExperienceDuration">05-2013 to 08-2016</span>
                </span>
                <div className="bold"> AMIDuOS Website</div>
                <ul className="ExperienceDescription">
                  <li><i className="icon">keyboard_arrow_right</i>Designed and developed responsive website for AMIDuOS software using bootstrap and jQuery.</li>
                  <li><i className="icon">keyboard_arrow_right</i>
                    Designed Analytics and reporting application to analyze and access database information easily using
                    bootstrap, c3.js and Jquery.
                  </li>
                </ul>
                <div className="bold">Digbil</div>
                <ul className="ExperienceDescription">
                  <li><i className="icon">keyboard_arrow_right</i>
                    Designed and developed web application for creating dynamic template for digital signage software
                    using React and redux.
                  </li>
                </ul>
              </div>
            </div>
            <div className="Heading flex">
              <i className="icon icon--24">emoji_events</i> <span className="uppercase"> Achievements </span>
            </div>
            <div className="Achievements">
              <ul>
                <li><i className="icon">keyboard_arrow_right</i>Award for Performer of the Year - 2015 @ American Megatrends</li>
                <li><i className="icon">keyboard_arrow_right</i>Award for performer of quarter at @ Cognizant </li>
                <li><i className="icon">keyboard_arrow_right</i>Top 0.45% users in StackOverflow in 2020 with total 3000+ reputations</li>
                  </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

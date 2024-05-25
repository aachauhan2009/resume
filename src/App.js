import React from 'react';
import { FaGithub } from "react-icons/fa"
import './App.css';
import { resume } from './resume2';

const TOTAL_EXPERIENCE = 6.9;

function App() {
  return (
    <div className="ResumeContainer">
      <div className="Resume">
        <div className="Header">
          {/* <div>
            <img className="Photo" src={require('./img/photo.jpg')} alt="Proile" />
          </div> */}
          <div className="NameContainer">
            <div className="Name"> {resume.user.name} </div>
            <div className="SubTitle"> {resume.user.title} </div>
            <div className="About">
              {/* Innovative, dynamic and quick learner Front-end Developer with {TOTAL_EXPERIENCE} years of experience in building
              scalable, usable and well-constructed websites and applications. */}
              {resume.user.about}
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
                    {resume.user.email}
                  </a>
                </div>
                <div className="flex">
                  <i className="icon">phone</i> {resume.user.mobile}
                </div>
                <div className="flex">
                  <i className="icon">room</i> {resume.user.location}
                </div>
                <div className="flex">
                  <i className="icon">language</i> {resume.user.languages.join(", ")}
                </div>
                <div className="flex">
                  <i className="icon">public</i> <a className="SimpleLink" href={resume.user.website}> {resume.user.website} </a>
                </div>
                <div className="flex">
                  <div className="icon"><FaGithub /></div> <a className="SimpleLink" href={resume.user.github}> {resume.user.github} </a>
                </div>
              </div>
              <div className="TechnicalSkill">
                <div className="SideHeading flex">
                  <i className="icon">code</i> <span className="uppercase"> Technical Skills </span>
                </div>

                {resume.skills.map(({ title, stars }) => (
                  <div className="Skill" key={title}>
                    <span> {title} </span>
                  </div>
                ))}
              </div>

              <div className="TechnicalSkill">
                <div className="SideHeading flex">
                  <i className="icon">build</i> <span className="uppercase"> Tools </span>
                </div>

                {resume.tools.map(({ title, stars }) => (
                  <div className="Skill" key={title}>
                    <span> {title} </span>
                  </div>
                ))}
              </div>

              <div className="Education">
                <div className="SideHeading flex">
                  <i className="icon">school</i> <span className="uppercase"> Education </span>
                </div>
                {resume.education.map(edu => {
                  return <>
                    <div className="Course bold">
                      {edu.degree}
                    </div>
                    <div className="School">@ {edu.college} </div>
                    <div className="CourseDuration">{edu.start} - {edu.end}</div>
                  </>

                })}
              </div>
            </div>
          </div>

          <div className="Main">
            <div className="Heading flex">
              <i className="icon icon--24">work</i> <span className="uppercase"> Experience </span>
            </div>
            <div className="Experience">

              {resume.experience.map(exp => {
                return <div className="ExperienceItem">
                  <span className="ExperienceTitle">
                    <span className="bold"> {exp.designation} </span> @ {exp.company}
                    <span className="ExperienceDuration">{exp.from} to {exp.to}</span>
                  </span>
                  {exp.jobDescription.map(i => {
                    return <>
                      {!!i.project && <div className="bold">{i.project}</div>}
                      <ul className="ExperienceDescription">
                        {i.projectDescription.map(d => <li><i className="icon">keyboard_double_arrow_right</i>{d}</li>)}
                      </ul>
                    </>
                  })}
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

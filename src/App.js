import React from 'react';
import './App.css';

const skills = [
  {
    title: "JavaScript",
    stars: 4
  }, {
    title: "React JS",
    stars: 4
  }, {
    title: "HTML",
    stars: 3
  }, {
    title: "CSS",
    stars: 4
  }, {
    title: "Redux",
    stars: 4
  }, {
    title: "ES6",
    stars: 4,
  }, {
    title: "GIT",
    stars: 3
  }, {
    title: "Jest",
    stars: 3
  }, {
    title: "Jasmine",
    stars: 3
  }, {
    title: "Webpack",
    stars: 3
  }, {
    title: "Node JS",
    stars: 2
  }
]

function App() {
  return (
    <div className="ResumeContainer">
      <div className="Resume">
        <div className="Header">
          <div>
            <img  className="Photo" src={require("./img/photo.jpg")} alt="Proile" />
          </div>
          <div className="NameContainer">
            <div className="Name"> Amit Chauhan </div>
            <div className="SubTitle"> Front-end Developer </div>
          </div>
        </div>

        <div className="ResumeContent">
          <div className="Side">
            <div className="Title">
              <div className="EmailPhone">
                <div className="flex">
                  <i className="icon">email</i>  a.a.chauhan2009@gmail.com
                </div>
                <div className="flex">
                  <i className="icon">phone</i>  9840806628
                </div>
                <div className="flex">
                  <i className="icon">room</i>  Wadgaon Sheri, Pune - 411014
                </div>
                <div className="flex">
                  <i className="icon">language</i>  English, Hindi, Gujarati
                </div>
              </div>
              <div className="TechnicalSkill">
                <div className="SideHeading flex"> <i className="icon">code</i> <span className="uppercase"> Technical Skills </span> </div>

                {skills.map(({ title, stars }) => 
                  <div className="Skill" key={title}>
                    <span> {title} </span>
                    <span>
                      {new Array(Math.floor(stars)).fill("").map((_, index) => {
                        return <i key={index} className="icon">star</i>;
                      })}
                    </span>
                  </div>
                )}
              </div>             
            </div>
          </div>

          <div className="Main">
            <div className="Heading flex"> <i className="icon icon--24">person</i> <span className="uppercase"> Profile </span> </div>
            <div className="About">
              Innovative, dynamic and quick learner Front-end Developer with over 6 years of experience in building scalable, usable and well-constructed websites and applications.
            </div>         
            <div className="Heading flex"> <i className="icon icon--24">work</i> <span className="uppercase"> Experience </span> </div>
            <div className="Timeline">
              <div className="TimelineItem">
                <div className="TimelineTitle">
                  <span className="bold"> Flight Network </span>
                  <span className="Role">Front-end Developer</span>
                  <div className="Duration">Oct 2017 to Present</div>
                </div>
              </div>
              <div className="TimelineItem">
                <div className="TimelineTitle">
                  <span className="bold">Cognizant</span>
                  <span className="Role">Associate Projects</span>
                  <div className="Duration">Aug 2016 to Oct 2017</div>
                </div>
              </div>

              <div className="TimelineItem">
                <div className="TimelineTitle">
                  <span className="bold">American Megatrends</span>
                  <span className="Role">System Software Engineer</span>
                  <div className="Duration">May 2013 to Aug 2016</div>
                </div>
              </div>
            </div>

            <div className="Heading flex"> <i className="icon icon--24">school</i> <span className="uppercase"> Education </span> </div>
            <div className="Timeline">
              <div className="TimelineItem">
                <div className="TimelineTitle">
                  B.E - Electronics and Communication (7.61 CGPA)
                  <div className="Duration">2008 - 2012</div>
                </div>
              </div>
              <div className="TimelineItem">
                <div className="TimelineTitle">
                  Higher Secondary Board (76.80%)
                  <div className="Duration">2006 - 2008</div>
                </div>
              </div>
              <div className="TimelineItem">
                <div className="TimelineTitle">
                  Secondary Board (85.43%)
                  <div className="Duration">2006</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

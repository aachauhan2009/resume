import React from 'react';
import './App.css';


function App() {
  return (
    <div className="ResumeContainer">
      <div className="Resume">
        <div className="NameContainer">
          <div className="Name"> Amit Chauhan </div>
          <div className="SubTitle"> Front-end Developer </div>
        </div>

        <div className="ResumeContent">
          <div className="Side">
            <div className="Title">
              <div className="SideHeading flex"> <i className="icon">person</i> <span className="uppercase"> About Me </span> </div>
              <div className="About">
                Innovative, dynamic and quick learner Front-end Developer with over 6 years of experience in building scalable, usable and well-constructed websites and applications.
              </div>
              <div className="EmailPhone">
                <div className="flex">
                  <i className="icon">room</i>  Wadgaon Sheri, Pune - 411014
                </div>
                <div className="flex">
                  <i className="icon">email</i>  a.a.chauhan2009@gmail.com
                </div>
                <div className="flex">
                  <i className="icon">phone</i>  9840806628
                </div>
              </div>
              <div className="TechnicalSkill">
                <div className="SideHeading flex"> <i className="icon">code</i> <span className="uppercase"> Technical Skills </span> </div>
                
              </div>             
            </div>
          </div>

          <div className="Main">            
            <div className="Heading flex"> <i className="icon">work</i> <span className="uppercase"> Experience </span> </div>
            <div className="Timeline">
              <div className="TimelineItem">
                <div className="TimelineTitle">
                  Flight Network
                  <span className="Role">Front-end Developer</span>
                  <div className="Duration">Oct 2017 to Present</div>
                </div>
              </div>
              <div className="TimelineItem">
                <div className="TimelineTitle">
                  Cognizant
                  <span className="Role">Associate Projects</span>
                  <div className="Duration">Aug 2016 to Oct 2017</div>
                </div>
              </div>

              <div className="TimelineItem">
                <div className="TimelineTitle">
                  American Megatrends
                  <span className="Role">System Software Engineer</span>
                  <div className="Duration">May 2013 to Aug 2016</div>
                </div>
              </div>
            </div>

            <div className="Heading flex"> <i className="icon">work</i> <span className="uppercase"> Education </span> </div>
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

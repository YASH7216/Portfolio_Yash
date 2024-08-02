import React from "react";

const AboutMe = () => {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img id="about--section--img2" src="./img/About.png" alt="" />
      </div>
      <div className="hero--section--content--box--about--section--box">
        <div className="hero--section--content">
          <p className="section--title"></p>
          <h1 className="skills--section--heading">About Me</h1>
          <h2 className="hero--section--description">
                      Hi,I am
            Yash dedicated <b style={{color:'orange'}}>Full Stack Developer</b>with a solid foundation in both
            frontend and backend technologies. Having completed my B.Tech in
            Computer Science and Engineering from Presidency University, 
          </h2>
          <h2 className="hero--section--description">
          I am
            keen to join innovative and growth-oriented companies. My ultimate
            career goal is to become a lead manager in the tech industry, where
            I can drive impactful and innovative projects. 
          </h2>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

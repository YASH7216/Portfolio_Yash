import React from "react";

function HeroSection() {
  const handleGetInTouchClick = () => {
    window.open("https://www.linkedin.com/in/yash-bastawad-2b8ab3255/", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="HeroSection" className="hero-section"> {/* Changed id to HeroSection */}
      <div className="hero-section-content-box">
        <div className="hero-section-content">
          <p className="hero-section-title">Hey, I'm YASH</p>
          <h1 className="hero-section-title">
            <span className="hero-section-title-color">Full Stack</span>{" "}
            <br /> 
            Developer
          </h1>
          <p className="hero-section-description">
          "It always looks impossible until it's accomplished. 
            <br /> Success feels far off until you reach it !..."
          </p>
        </div>
        <button className="btn btn-primary" onClick={handleGetInTouchClick}>Get In Touch</button>
      </div>
      <div className="hero-section-img">
        <img className="hero-image" src="./img/hero.png" alt="herosection" style={{ width: "600px", height: "600px" }} />
      </div>
    </section>
  );
}

export default HeroSection;

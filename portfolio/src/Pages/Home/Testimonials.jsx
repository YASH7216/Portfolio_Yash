import React from "react";
import data from "../../data/index.json";

export default function Testimonial() {
  return (
    <section className="testimonial--section" id="testimonial">
       <h1 className="sections--heading--education"  style={{color:"#5e3bee"}}>Education</h1>
        
  
      <div className="portfolio--section--container">
        {data?.testimonial?.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="testimonial--section--card"
            style={{
              backgroundImage: `url(${item.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <h3>{item.title}</h3>
            <p className="text-md">{item.description}</p>
            <div className="testimonial--section--card--author--detail">
              <div>
                <p className="text-md testimonial--author--name">
                  {item.Duration}
                </p>
                <p className="text-md testimonial--author--designation">
                  {item.Address}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from 'react'
import data from "../../data/index.json"

const Myskills = () => {
  return (
    <section className='skills--section' id='myskills'>
      <div className="portfolio--container">
        <p className="section--title"></p>
        <h1 className="skills--section--heading">
          My Expertise
        </h1>
      </div>
      <div className="skills--section--container">
      <div className='skills-section--card'>
            <div className="skillx--section--img">
              <img src='./img/product-chain-1.png' alt="product" />
            </div>
            <div className="skills--section--card">
              <h3 className='skills--section--title'>
                FRONTEND</h3>
                <p  className='skills--section--description'>
                  <img  src="./img/frontend.png" alt="" />
                </p>
            </div>
          </div>
      <div className='skills-section--card'>
            <div className="skillx--section--img">
              <img src='./img/feather-pen-1.png' alt="product" />
            </div>
            <div className="skills--section--card">
              <h3 className='skills--section--title'>
                BACKEND</h3>
                <p  className='skills--section--description'>
                  <img  src="./img/backend.png" alt="" />
                </p>
            </div>
          </div>
      <div className='skills-section--card'>
            <div className="skillx--section--img">
              <img src='./img/feather-pen-2.png' alt="product" />
            </div>
            <div className="skills--section--card">
              <h3 className='skills--section--title'>
                UI/UX</h3>
                <p  className='skills--section--description'>
                  <img  src="./img/uiux.png" alt="" />
                </p>
            </div>
          </div>
      <div className='skills-section--card'>
            <div className="skillx--section--img">
              <img src='./img/tag-1.png' alt="product" />
            </div>
            <div className="skills--section--card">
              <h3 className='skills--section--title'>
              DATA ANALYSIS</h3>
                <p  className='skills--section--description'>
                  <img  src="./img/data.png" alt="" />
                </p>
            </div>
          </div>
       
      </div>
      
    </section>
  )
}

export default Myskills
















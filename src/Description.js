import React from 'react'
import "./Description.css";


function Description() {
  return (
    <div className="desc">
      <div className="container contain">
        <div className="spinner-box">
          <div className="solar-system">
            <div className="earth-orbit orbit">
              <div className="planet"></div>
              <div className="venus-orbit orbit">
                <div className="planet venus"></div>
                <div className="mercury-orbit orbit">
                  <div className="planet mecury"></div>
                  <div className="sun"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="write__up">
          <h1>
            Finding digital solutions <br /> for the World.
          </h1>
          <h3>OFFICES IN GERMANY & NIGERIA</h3>
        </div>
      </div>
    </div>
  );
}

export default Description

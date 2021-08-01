import React, {useEffect} from "react";
import './Project.css';
import Picture from './images/Syno.JPG'
import Pic1 from './images/cpu.JPG'
import Pic2 from './images/performance.JPG'
import Pic3 from './images/network.JPG'
import Pic4 from './images/raid.JPG'


export const Product = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
    <div className="wrapper">
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

          <div className="write">
            <h1>Our Products</h1>
            <p>
              Next-gen products and solutions. See how we plan on changing the
              landscape for data management.
            </p>
          </div>
        </div>
      </div>
      <section className="container">
        <div className="row product">
          <div className=" col-md-6">
            <img src={Picture} alt="pic" id="picture" />
            <h4>DiskStation DS220+</h4>
            <p>Streamline your data management</p>
          </div>
          <div className="col-md-6 compact ">
            <h2>Compact and high performance NAS solution</h2>
            <p>
              Synology DS220+ is a compact network-attached storage solution
              designed to streamline your data and multimedia management. It
              features smooth data sharing, video streaming, and photo indexing,
              as well as well-rounded data protection and recovery options.
            </p>
          </div>
        </div>
      </section>
      <div className="row properties">
        <div className="col-md-3">
          <img src={Pic1} alt="pic1" id="pic1" />
          <h5>CPU</h5>
          <p>2-core 2.0 GHz, burst up to 2.9 GHz</p>
        </div>
        <div className="col-md-3">
          <img src={Pic2} alt="pic2" id="image" />
          <h5>Performance</h5>
          <p>Average 15% boost to computing-intensive applications1</p>
        </div>
        <div className="col-md-3">
          <img src={Pic3} alt="pic3" id="pic1" />
          <h5>Network</h5>
          <p>2 x 1GbE LAN ports</p>
        </div>
        <div className="col-md-3">
          <img src={Pic4} alt="pic4" id="image" />
          <h5>Safe storage</h5>
          <p>RAID 1 setup protects against sudden drive failure</p>
        </div>
      </div>
    </div>
  );
};

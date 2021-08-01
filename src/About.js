import React, {useEffect} from "react";
import './About.css';
import Aos from "aos";
import "aos/dist/aos.css";
import Image1 from "./images/synology.JPG";
import Image2 from "./images/download.JPG";
import Image3 from "./images/itbrewery.JPG";
import Image4 from "./images/kontor.JPG";

export const About = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="about__container">
      <div className=" heading">
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

            <div className="write-service">
              <h1 className="ml-md-5">About Us</h1>
              <p>
                Gastrown offers product development of web service Info and
                mobile applications for major brands. We address your business
                challenges while meeting strict deadlines in building a
                technically complex and user-friendly product.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container report">
        <div className="row Germany">
          <h1>Entering the european market via Germany:</h1>
          <div className="col-md-12 ">
            <p>
              Entering the european market via Germany Europe is one of the
              biggest markets for african products. And it is also not that easy
              to enter: there are legal, cultural and logistical burdens. But
              together with you we can over come this burdens for your products.
              Our european office is in Dusseldorf, Germany. The CEO of our
              company is a german lawyer – so we know how tricky law can be.
              Some of our employees are Salesman with over 20 years of
              working-experience in the german market, so we also know how to
              sell in Germany. In addition, our team in Germany has a diverse
              background: we have German natives, guys from eastern Europe, guys
              from Turkey and Africans working there. So we know a bit about
              dealing with cultural differences and we are not afraid to tell
              our business partners in Africa if we think there product won´t
              sell in Europe. We are honest there, just because your product
              fits Africans doesn´t mean it fits Germans or other Europeans. If
              we think you have to adapt, we will tell you. So just get in touch
              with us!
            </p>
          </div>
        </div>

        <div className="row values">
          <h1>Our Values</h1>
          <div className="col-md-12 values" data-aos="fade-up">
            <h2>Trust</h2>
            <p>
              We believe in trust as the main resource of doing business
              together. That is not a phrase. Our roots in Germany maybe make us
              a bit more conservative than other companies in Nigeria, but that
              has advantages. If you don´t trust your business partner, your
              business won´t suceed in the long run. For sure one can make fast
              money by betraying – but that will be a short gain. We encourage
              each of our developers to inhale that german tradition of trust
              and reliability – or as the Germans famously name it
              “Zuverlässigke“ . When one of our developers has problems with his
              sick mother at home, we encourage him to talk about that in the
              office. Better he takes a day off, so he can focus fully on work
              after that. We don´t see this as a weakness. Rather we think that
              you can do good work only if you trust that no one uses your
              weaknesses for his advantage. And this is the same way we treat
              our business partners.{" "}
            </p>
          </div>
        </div>
        <br />
        <div className="row values" data-aos="fade-up">
          <h2>Honesty</h2>
          <div className="col-md-12 values">
            <p>
              {" "}
              Our second value goes hand in hand with the first one. We are
              honest to our employees and business partners. If we all ready
              know we can´t deliver on Monday we won´t say we will deliver on
              monday. If we got unexpected problems with your project, we will
              tell you. If we have doubts if something is a good idea, we talk
              about it.
            </p>
          </div>
        </div>
        <br />
        <div className="row values bottom" data-aos="fade-up">
          <h2>Efficiency</h2>
          <div className="col-md-12 ">
            <p>
              {" "}
              The famous German Effizienz. We hate doing useless stuff. We try
              to be a bit better at each project. We empower our employees to
              tell the boss if they have a faster way to do things. We are lazy.
              And that is our biggest strength: we want to get things done on
              the most efficient way.
            </p>
          </div>
        </div>
        <div className="partners">
          <h1>Our Partners</h1>
        </div>

        <div className="row clients">
          <div className="col-md-6">
            <img src={Image1} alt="" />
            <img src={Image2} alt=""  id="image2"/>
            <br /> <br />
            <img src={Image3} alt="" id="image3" />
            <img src={Image4} alt="" id="image4" />
          </div>
          <div className="col-md-6 client__write">
            <h2>Your success is our mission</h2>
            <p>
              With a blend of pioneering expertise and considerable experience,
              Gastrown offers tailor-made solutions to customers across
              industries worldwide. Hear first-hand from our customers about how
              they seamlessly and securely migrate, scale, and manage their
              businesses with our solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

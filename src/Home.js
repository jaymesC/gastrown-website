import React, {useEffect} from 'react'
import Description from './Description'
import "./Home.css"
import Orbit from './Orbit'
import Component1 from './Component1';
import Aos from "aos";
import "aos/dist/aos.css";

export const Home = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="home__container">
      <Description />
      <div className="row writing">
        <div className="statement col-md-6">
          <p>
            Custom software development company that creates and transforms
            business solutions, products, and enterprises to drive growth today
            and into the future
          </p>
          <p>
            We believe we can help you drive margins while remaining true to our
            ethical values. We take ownership of what we do.
          </p>
          <p>
            We are always honest no matter what. We deep dive into every project
            to deliver excellence. We say “we” since we are a big Gastrown
            family united together around one goal - to help you innovate for
            growth.
          </p>
          <div class="square" data-aos="fade-up"></div>
        </div>

        <div className="motto col-md-6" data-aos="slide-left">
          <Component1 />
        </div>
      </div>
      <div className=" row believe">
        <div className="col-md-4" data-aos="fade-up">
          <h3>Service Support</h3>
          <p>
            We not only write code from scratch, but can also work on existing
            projects, bringing them up to your needs and standards.Have big
            plans for your current product? Delegate us its further
            development—we will help breathe new life into your website or
            application.
          </p>
        </div>
        <div className="col-md-4" data-aos="fade-up">
          <h3>Product Research</h3>
          <p>
            Pre-project research is a unique methodology developed by GASTROWN
            and based on using Agile practices while diving into the client’s
            business challenges. This is a great way to assess the value of the
            intended functionality, understand how to successfully pitch your
            idea to the management, align IT and business, prevent throwing your
            budget down the drain, and minimize costs.
          </p>
        </div>
        <div className="col-md-4" data-aos="fade-up">
          <h3>Outsourcing</h3>
          <p>
            Want to strengthen your team with experienced developers? Don't put
            unnecessary pressure on your HR department—contact GASTROWN. Our
            guys easily fit in any team and working environment—be it wearing
            ties or slippers, they always adhere to your rules.
          </p>
        </div>
      </div>

      <div className="row technology motto">
        <div className="col-md-6" data-aos="slide-right">
          <h1>
            <span className="upper__line">Technol</span>ogy
          </h1>
          <h2>
            Turn emerging technologies <br /> into profit ↓
          </h2>
        </div>

        <div className="col-md-6">
          <p>
            Be it an innovative consumer app or a next-gen enterprise system –
            we do it all, from product ideation and concept development to
            system rollout and scale-up. We envision, prototype, create and test
            products and solutions to find new competitive advantage for your
            business.
          </p>
          <p>
            We think in terms of value, not technology. We deep dive into your
            business to deliver innovations tailored to your business needs.
          </p>
          <div id="circle" data-aos="fade-up"></div>
        </div>
      </div>

      <div className="row discover">
        <div className="col-md-12 ">
          <h1>Challenges we are hungry for</h1>
          <p>
            We make sure you are not adopting a technology just because it’s
            fancy. <br /> Our goal is to turn innovations into a market-ready
            product to <br /> help you achieve operational excellence, disrupt
            the competition and maximize profits
          </p>
        </div>
      </div>

      <div className="container container__color">
        <div className="service__tag">
          <h1 class="center">Services</h1>
          {/* <p>
            Hand in hand with our office in Dusseldorf, Germany we provide
            solutions to (almost) every problem in the digital world. We have
            access to a diverse portfolio of developers and IT Services.
          </p> */}
        </div>
        <div className="row1 row">
          <div className="col-md-4 card" data-aos="flip-up">
            <h1>Operations</h1>
            <p>System and Network: IT Service Management</p>
            <p>Application Management and Support</p>
            <p>Data Center, Cloud and security operations</p>
          </div>
          <div className="col-md-4 card " data-aos="flip-up">
            <h1>Management</h1>
            <p>CIO, CSO, CTO,project management, IT management</p>
            <p>Requirement and Test management</p>
          </div>
          <div className="col-md-4 card card2" data-aos="flip-up">
            <h1> Development</h1>
            <p>Full stack Development</p>
            <p> Enterprise ERP, CRM, SCM, BI </p>
            <p>Predictive Analytics and Big Data</p>
          </div>
        </div>
        <div className="row row2">
          <div className="col-md-4 card" data-aos="flip-up">
            <h1>Consulting</h1>
            <p>IT Strategy Consulting, Cybersecurity Consulting</p>
            <p>Technology and Platform Consulting</p>
            <p>Requirements and Process Management</p>
          </div>
          <div className="col-md-4 card" data-aos="flip-up">
            <h1>Business</h1>
            <p>IT Sales and BID Management</p>
            <p>IT Procurement</p>
            <p>IT Recruitment and Workforce management</p>
            <p>IT Controlling</p>
            <p>Business Development Services</p>
          </div>
          <div className="col-md-4 card" data-aos="flip-up">
            <h1>Cyber Security</h1>
            <p>Cyber Security Consulting</p>
            <p>Penetration Testing</p>
            <p>Network Security Monitoring</p>
          </div>
        </div>
      </div>
    </div>
  );
}

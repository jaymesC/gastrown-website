import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {

  const today = new Date();

  return (
    <div className="footer">
      <div className=" foot">
        <div className="col-md-3 logo">
          <Link exact to="/" className="nav-logo">
            GASTROWN
          </Link>{" "}
          <div className="informations">
            <i class="fa fa-envelope-o pr-md-2" aria-hidden="true"></i>{" "}
            sales@gastrown.com <br />{" "}
            <span id="num">
              {" "}
              <i class="icon fa fas fa-phone-alt pr-md-2"></i> +2348064933560
            </span>
          </div>
        </div>

        <div className="affiliate">
          <h2>Affiliated with: ITbewery</h2>
          <p>
            With over 20years of project experience, and a creative
            cross-functional team at hand, we rethink your business model and
            implement new approaches, leveraging highly on digital tools and
            technology to customize your product and strengthen your positioning
            in the market. <br />
            <Link
              to={{
                pathname: "https://itbrewery.de/",
              }}
              target="_blank"
              className="link"
            >
              ↪ Official Website
            </Link>
          </p>
        </div>
      </div>
      <div className="copy">
        <p>Copyright © {today.getFullYear()} All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;

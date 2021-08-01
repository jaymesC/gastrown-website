import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import { Home } from "./Home";
import { Services } from "./Services";
import { Product } from "./Product";
import { About } from "./About";
import { Contact } from "./Contact";
import Footer from "./Footer"


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;

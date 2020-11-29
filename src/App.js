import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/layout/Navbar'
import './App.css';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import About from './components/layout/About';
import Contact from './components/layout/Contact';
import MyWork from './components/layout/MyWork';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/mywork" component={MyWork} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  )
}

export default App;

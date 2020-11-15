import React, { Fragment } from 'react';
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import Navbar from './components/layout/Navbar'
import './App.css';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';

const App = () => {
  return(
    <Fragment>
      <Navbar />
      <Landing />
      <Footer />
    </Fragment>
  )
}

export default App;

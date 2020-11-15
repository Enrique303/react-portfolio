import React, { Fragment } from 'react';
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import Navbar from './components/layout/Navbar'
import './App.css';
import Footer from './components/layout/Footer';

const App = () => {
  return(
    <Fragment>
      <Navbar />
      <Footer />
    </Fragment>
  )
}

export default App;

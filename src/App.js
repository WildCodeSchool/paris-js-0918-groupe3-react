import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import NewOfferContainer from './components/NewOfferContainer';
import Home from './components/Home';
import AccountCompany from './components/AccountCompany';
import AccountCandidate from './components/AccountCandidate';
import Header from "../src/components/Header";

import Applications from "../src/components/Applications"

import ApplicationCandidate from './components/ApplicationCandidate';
import AnswersApplication from './components/AnswersApplication';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/newOffer' component={NewOfferContainer} />
          <Route path='/company:id(\d+)' component={AccountCompany}/>
          <Route path='/candidate:id(\d+)' component={AccountCandidate}/>
          <Route path='/offers:id(\d+)' component={Applications}/>
          <Route path='/apply:id(\d+)' component={ApplicationCandidate}/>
          <Route path='/answers/offers:idOffer(\d+)/question:idQuestion(\d+)' component={AnswersApplication}/>
        </Switch>
      </div>
    );
  }
}

export default App;

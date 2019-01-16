import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import NewOfferContainer from './components/NewOfferContainer';
import Home from './components/Home';
import AccountCompany from './components/AccountCompany';
import AccountCandidate from './components/AccountCandidate';
import Header from "../src/components/Header";
import AnswersCandidate from "../src/components/AnswersCandidate"

import Applications from "../src/components/Applications"


import ApplicationCandidate from './components/ApplicationCandidate';
import AnswersApplication from './components/AnswersApplication';

import WhyPage from './components/WhyPage';
import HowPage from './components/HowPage';





class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/newOffer' component={NewOfferContainer} />

          <Route path='/company:idCompany(\d+)/offers:idOffer(\d+)' component={Applications}/>
          <Route path='/apply:id(\d+)' component={ApplicationCandidate}/>
          <Route path='/answers/offers:idOffer(\d+)/question:idQuestion(\d+)' component={AnswersApplication}/>

          <Route path='/companies' component={AccountCompany}/>
          <Route exact path='/candidates' component={AccountCandidate}/>
          <Route path='/candidates/answers/offer:idOffer' component={AnswersCandidate}/>

          <Route path='/why' component={WhyPage}/>
          <Route path='/how' component={HowPage}/>

        </Switch>
      </div>
    );
  }
}

export default App;

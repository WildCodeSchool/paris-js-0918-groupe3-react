import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import NewOfferContainer from './components/NewOfferContainer';
import Home from './components/Home';
import AccountCompany from './components/AccountCompany';
import AccountCandidate from './components/AccountCandidate';
import Header from "../src/components/Header";
import Application from './components/Application';
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
          <Route path='/company:id(\d+)' component={AccountCompany}/>
          <Route path='/candidate:id(\d+)' component={AccountCandidate}/>
          <Route path='/apply:id(\d+)' component={Application}/>
          <Route path='/why' component={WhyPage}/>
          <Route path='/how' component={HowPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';

//IMPORT BROWSER ROUTER, ROUTER AND SWITCH
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//IMPORT COMPONENTS
import About from './components/About';
import Home from './components/Home';
import BaseLayout from './components/Layout';
import Portfolio from './components/Portfolio';




ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/portfolio' component={Portfolio} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();

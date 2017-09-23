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
import References from './components/References'
import Contact from './components/Contact'
import Splash from './components/Splash'





ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={Splash} />
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contact' component={Contact} />
        <Route path='/references' component={References} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();

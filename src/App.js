import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.scss';

import AOS from 'aos';
import { focusHandling } from 'cruip-js-toolkit';

import Home from './pages/Home';
import Thankyou from './pages/Thankyou';
import AffiliateTerms from './pages/AffiliateTerms';
import StatusTerms from './pages/StatusTerms';

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
    focusHandling('outline');
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/thankyou">
          <Thankyou />
        </Route>
        <Route path="/affiliate-terms">
          <AffiliateTerms />
        </Route>
        <Route path="/status-terms">
          <StatusTerms />
        </Route>
      </Switch>
    </>
  );
}

export default App;

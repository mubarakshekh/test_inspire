import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import Navbar from '../components/navbar'
import Page1 from '../pages/page1/Page1'
import Page2 from '../pages/page2/page2'
import NotFound from '../pages/error/NotFound';

function App() {
  return (
    <div>
      <div className='small_screen'> We're working for this screen size</div>
      <div className="App">
        <div className="container">
          <Navbar />
          <Router>
            <div className="m-fifty">
              <Switch>
                <Route path="/" component={Page1} exact />
                <Route path="/home" component={Page1} />
                <Route path="/login" component={Page2} />
                <Route path="*" component={NotFound} />
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;

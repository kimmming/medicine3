import React, {Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import Header from './components/Header';

import Home from './containers/Home';
import About from './containers/About';
import Manage from './containers/Manage';

class App extends Component {
  render() {
    return (
  
      <Router>
        <div>
          <Header/>
            <Route path="/" component={Home} exact/>
            <Route path="/medicine3" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/manage" component={Manage}/>
        </div>
      </Router>
    );
  }
}

export default App;
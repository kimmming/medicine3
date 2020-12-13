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
            <Route path="/about" component={About}/>
            <Route path="/manage" component={Manage}/>
        </div>
      </Router>

      /*
      <div>
        <Header/>
        <center>
        <Map/>
        </center>
        {this.props.children}
      </div>
      */
    );
  }
}

export default App;
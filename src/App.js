import React, {Component} from 'react';

import Header from './components/Header';
//import Login from './components/Login';
import Map from './components/Map';
import Table from './components/table';

class App extends Component {
  render() {
    return (
      
      <div>
        <Header/>
        <center>
        <Map/>
        </center>
        {this.props.children}
        
        <Table/>
        
        
        
       
      </div>
      
     /*
      <div>
        <Login/>
      </div>
      */
    );
  }
}

export default App;
import React, { Component } from 'react';
import axios from 'axios';
import RouterView from './router';

class App extends Component {
  componentWillMount(){
    axios.get("https://m.moretickets.com/showapi/pub/site/58a2bb1d0cf273b891c85e8f/banner/app?siteCityOID=5101&time=1531201729369&src=m_web").then(
      (res)=>{
        
      }
    )
  }
  render() {
    return (
      <div className="App">
        <RouterView/>
      </div>
    );
  }
}

export default App;

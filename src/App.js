import React, { Component } from 'react';
import RouterView from './router';
import { withRouter } from 'react-router-dom';
import ConnectGroup from './modules/group'

class App extends Component {
  componentWillMount(){
    this.props.getInitialUserInfo();
  }
  render() {
    return (
      <div className="App">
        <RouterView/>
      </div>
    );
  }
}

export default withRouter(ConnectGroup(App,['commons']))

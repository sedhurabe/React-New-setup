import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './Store';
import Routers from './Routers';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <Routers />
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
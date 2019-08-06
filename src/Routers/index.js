import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'
import GlobalMessage from "Components/Generic/GlobalError";
import PageNotFound from 'Components/Pages/HTTPStatusCodes/PageNotFound';
import Home from 'Components/Pages/Home';

class Routers extends Component{
  render(){
    const { errorData } = this.props;
    return(
      <React.Fragment>
        {errorData.type !== '' && <GlobalMessage message={errorData.message} type={errorData.type} />}        
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
function mapStateToProps(state){
  return{
    errorData: state.GlobalMessage
  }
}
export default connect(mapStateToProps) (Routers);
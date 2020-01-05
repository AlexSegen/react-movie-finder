import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Details } from './pages/Details';

class App extends Component {
 
  render() {

   
    return (
      <div className="content__area">
        <h1 className="app-name">Movie Finder</h1>
        <div className="app-content">
          <Switch>
            <Route exact path ="/" component={Home}/>
            <Route path ="/details/:id" component={Details}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

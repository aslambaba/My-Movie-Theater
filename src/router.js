import React from 'react';
import Home from './App';
import TopRated from './pages/top-rated';
import MyMovies from './pages/mymovies';
import Upcoming from './pages/upcoming';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  
  function Routers() {  
    return (
      <div className="App">
        < Router>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/top-rated' component={TopRated}></Route>
            <Route path='/my-movies' component={MyMovies}></Route>
            <Route path='/upcoming' component={Upcoming}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
export default Routers;
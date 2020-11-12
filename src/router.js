import React from 'react';
import Home from './App';
import UpcomingMovies from './upcoming';
import TopRated from './toprated';
import MyMovies from './mymovies';
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
            <Route path='/upcoming' component={UpcomingMovies}></Route>
            <Route path='/top-rated' component={TopRated}></Route>
            <Route path='/my-movies' component={MyMovies}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
export default Routers;
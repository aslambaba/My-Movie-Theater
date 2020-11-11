import React from 'react';
import Header from './components/header';
import Slider from './components/slider';
import MovieSec from './components/moviesec';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Header />      
      <Slider />
      <MovieSec />
      <Footer />
    </div>
  );
}

export default App;

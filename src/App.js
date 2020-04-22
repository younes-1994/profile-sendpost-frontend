import React from 'react';

import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Media from './components/Media/Media';
import Footer from './components/Footer/Footer';

import './App.scss';

const App = () => {

  return (
    <div className="App-container">
      <Header />
      <Content />
      <Media />
      <Footer />
    </div>
  );
}

export default App;
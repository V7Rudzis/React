import React from 'react';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

const App = () => {
  return(
    <div className='app-wrapper'>
      <Content />
      <Header />
      <Nav />
    </div>
  );
};

export default App;

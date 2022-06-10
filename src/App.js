import React from 'react';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Content/Dialogs/Dialogs';
import './App.css';

const App = () => {
  return(
    <div className='app-wrapper'>
      {/* <Content /> */}
      <Header />
      <Nav />
      <div className='app-wrapper-content'>
        <Dialogs />
      </div>
      
    </div>
  );
};

export default App;

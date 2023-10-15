import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Videos from './Videos';

import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      
      

      <div className='app_page'>
        <Sidebar />
        <Videos />
        
        
        
      </div>
    </div>
  );
}

export default App;

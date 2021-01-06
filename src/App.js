import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import './css/App.css';

const App = () => {
  return (



    <div className = 'wrapper'>



      <Header/>
      <div className="content">
        <Sidebar/>
        <Profile/>
      </div>




    </div>



  );
};

export default App;
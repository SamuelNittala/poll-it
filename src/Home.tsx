import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components';

function Home() {
  return (
    <div className="App">
      <Header />
      <Outlet />
   </div>
  )
}

export default Home; 

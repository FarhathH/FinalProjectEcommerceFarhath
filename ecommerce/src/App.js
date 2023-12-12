import logo from './logo.svg';
import './App.css';
import './ecommerce.css';
import Footer from './ecommerce.footer.js';
import Header from './ecommerce.header.js';
import NavBar from './nav.bar.js';
import {useState} from 'react';

function App() {
  return (
    <div className="App">
      <div className = "body">
        <Header/>
        <NavBar/>
        <div className = "content">
          
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

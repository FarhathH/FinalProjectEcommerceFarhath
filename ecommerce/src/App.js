import logo from './logo.svg';
import './App.css';
import './ecommerce.css';
import Footer from './ecommerce.footer.js';
import Header from './ecommerce.header.js';
import NavBar from './ecommerce.nav.bar.js';
import {useState} from 'react';

function App() {

    const[products, setProducts] = useState(
      [
        
      ]
    )
  // function ClickNavBtn(){

  // }


  return (
    <div className="App">
      <div className = "body">
        <Header/>
        <NavBar
          // action = {ClickNavBtn}
          // index = {index}
        />
        <div className = "content">
          
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import './ecommerce.css';
import Footer from './ecommerce.footer.js';
import Header from './ecommerce.header.js';
import NavBar from './ecommerce.nav.bar.js';
import ProductPage from './ecommerce.product.pg.js';
import {useState} from 'react';

function App(props) {

    const[products, setProducts] = useState(
      [
        {
          title:"Cashmere",
          price:"£15"
        },
        {
          title:"Silk",
          price:"£15",
        },
        {
          title:"Snood",
          price:"£15"
        },
        {
          title:"Shawls",
          price:"£15"
        }

      ]
    )
      
    //For checking the index.
    const[selectedBtn, setSelectedBtn] = useState(products[0]);

    function ClickNavBtn(index){
      setSelectedBtn(products[index])  
    }


  return (
    <div className="App">
      <div className = "body">
        <Header/>
        <NavBar/>
          <div className = "content">
            <ProductPage product = {products} action = {ClickNavBtn}/>
          </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

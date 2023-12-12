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
      [ //list for nav bar and product page
        {
          title:"Cashmere",
          price:"£5"
        },
        {
          title:"Silk",
          price:"£15",
        },
        {
          title:"Snood",
          price:"£19"
        },
        {
          title:"Shawls",
          price:"£20"
        },
        {
          title:"Headscarfs",
          price:"£3"
        },
        {
          title:"S",
          price:"£34"
        }

      ]
    )
      
    //For checking the index.
    const[selectedBtn, setSelectedBtn] = useState(products[0]);

    function ClickNavBtn(index){
      setSelectedBtn(products[index])
      alert(index) //checking that the function works via onclick 
    }


  return (
    <div className="App">
      <div className = "body">
        <Header/>
        <NavBar
          product = {products} action = {ClickNavBtn}
        />
          <div className = "content">
            <ProductPage 
              product = {products} action = {ClickNavBtn}
            />
          </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

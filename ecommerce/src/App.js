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
        id:0,
        title:"Cashmere",
        price:"£5"
      },
      {
        id:1,
        title:"Silk",
        price:"£15",
      },
      {
        id:2,
        title:"Snood",
        price:"£19"
      },
      {
        id:3,
        title:"Shawls",
        price:"£20"
      },
      {
        id:4,
        title:"Headscarfs",
        price:"£3"
      },
    ]
  )
      
  //For checking the index.
  const[selectedBtn, setSelectedBtn] = useState(products);
  
  const[index, setIndex] = useState([])
  function ClickNavBtn(index){
    setSelectedBtn(products[index])
    alert(index)//checking that the function works via onclick 
    console.log(products.title)
  }


  return ( //displaying components I made separately.
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

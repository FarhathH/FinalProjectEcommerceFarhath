import logo from './logo.svg';
import './App.css';
import './ecommerce.css';
import Footer from './ecommerce.footer.js';
import Header from './ecommerce.header.js';
import NavBar from './ecommerce.nav.bar.js';
import ProductPage from './ecommerce.product.pg.js';
import {useState} from 'react';
import picture from './testphoto.jpg';


function App() {

  const[products, setProducts] = useState(
    [ //list for nav bar and product page menu.
      {
        picture: picture,
        title:"Cashmere",
        price:"£5"
      },
      {
        picture: picture,
        title:"Silk",
        price:"£15",
      },
      {
        picture: picture,
        title:"Snood",
        price:"£19"
      },
      {
        picture: picture,
        title:"Shawls",
        price:"£20"
      },
      {
        picture: picture,
        title:"Headscarfs",
        price:"£3"
      },
    ]
  )
    

    

  //For selecting the product by index.
  const[selectedProduct, setSelectedProduct] = useState(products);
  
  

  function ClickNavBtn(index){
    setSelectedProduct(products[index])
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
              product = {selectedProduct} action = {ClickNavBtn}
            />
            
          </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

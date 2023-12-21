import logo from './logo.svg';
//stylesheets
import './App.css';
import './ecommerce.css';

//components to use in my website.
import Footer from './ecommerce.footer.jsx';
import Header from './ecommerce.header.jsx';
import NavBar from './ecommerce.nav.bar.jsx';
import ProductPage from './ecommerce.product.pg.jsx';
import Basket from './ecommerce.basket.jsx';

import {useState} from 'react'; //
import picture from './testphoto.jpg'; //image for a test

import cashmere1 from './cashmere.jpg';
import cashmere2 from './cashmere1.jpg';
import cashmere3 from './cashmere2.jpg';
import cashmere4 from './cashmere3.jpg';
import cashmere5 from './cashmere4.jpg';

import silk1 from './silk.jpg';
import silk2 from './silk1.jpg';
import silk3 from './silk2.jpg';
import silk4 from './silk3.jpg';
import silk5 from './silk4.jpg';

import snood1 from './snood.jpg';
import snood2 from './snood1.jpg';
import snood3 from './snood2.jpg';
import snood4 from './snood3.jpg';
import snood5 from './snood4.jpg';

import shawl1 from './shawls.jpg';
import shawl2 from './shawls1.jpg';
import shawl3 from './shawls2.jpg';
import shawl4 from './shawls3.jpg';
import shawl5 from './shawls4.jpg';

import headscarf1 from './headscarfs.jpg';
import headscarf2 from './headscarfs1.jpg';
import headscarf3 from './headscarfs2.jpg';
import headscarf4 from './headscarfs3.jpg';
import headscarf5 from './headscarfs4.jpg';

function App() {

  const[products, setProducts] = useState(
    [ //list for nav bar and product page menu.
      {
        title:"Cashmere",
        specificItems: [//product selection
                        {picture: cashmere1, name:"1", price:"£5"}, 
                        {picture: cashmere2, name:"2", price:"£10"}, 
                        {picture: cashmere3, name:"3", price:"£15"}, 
                        {picture: cashmere4, name:"4", price:"£20"}, 
                        {picture: cashmere5, name:"5", price:"£25"}],
      },
      {
        title:"Silk",
        specificItems: [//product selection
                        {picture: silk1, name:"6", price:"£30"}, 
                        {picture: silk2, name:"7", price:"£35"}, 
                        {picture: silk3, name:"8", price:"£40"}, 
                        {picture: silk4, name:"9", price:"£45"}, 
                        {picture: silk5, name:"10", price:"£50"}],  
      },
      {
        picture: picture,
        title:"Snood",
        specificItems: [ //product selection
                        {picture: snood1, name:"11", price:"£55"}, 
                        {picture: snood2, name:"12", price:"£60"}, 
                        {picture: snood3, name:"13", price:"£65"}, 
                        {picture: snood4, name:"14", price:"£70"}, 
                        {picture: snood5, name:"15", price:"£75"}],
      },
      {
        title:"Shawls",
        specificItems: [//product selection
                        {picture: shawl1, name:"16", price:"£80"}, 
                        {picture: shawl2, name:"17", price:"£85"}, 
                        {picture: shawl3, name:"18", price:"£90"}, 
                        {picture: shawl4, name:"19", price:"£95"}, 
                        {picture: shawl5, name:"20", price:"£100"}], 
      },
      {
        title:"Headscarfs",
        specificItems: [//product selection
                        {picture: headscarf1, name:"21", price:"£105"}, 
                        {picture: headscarf2, name:"22", price:"£100"}, 
                        {picture: headscarf3, name:"23", price:"£115"}, 
                        {picture: headscarf4, name:"24", price:"£120"}, 
                        {picture: headscarf5, name:"25", price:"£125"}], 
      },
    ]
  )


  //for viewing basket
  const[showBasket, setShowBasket] = useState(false);
    

  //For selecting the product by index.
  const[selectedProduct, setSelectedProduct] = useState(products[0]);
  
  //array for adding items to basket page.
  const[basketList, setBasketList]=useState([]);

  //for picking out the items in a category.
  // const[currentCategory, setCurrentCategory] = useState(products.specificItems);
  
  //function for adding item to basket with onClick trigger
  function AddToBasket(item){
    let newItem = { //variable that represents the item to be added.
                    pic:item.picture,
                    name:item.name,
                    price:item.price
                  }
    let temp = [...basketList]
    temp.push(newItem)
    setBasketList(temp)
    console.log(basketList) //testing that temp variable has an item added.
    
  }
  
  //This trigger when user clicks a button on the nav bar.
  function ClickNavBtn(index){
    setSelectedProduct(products[index])
    // setCurrentCategory(products.specificItems)
  }

  function BasketPageView(){ //for viewing the basket checkout page.
    setShowBasket(!showBasket); //creates a toggle for the basket button.
  }


  return ( //displaying components I made separately.
    <div className="App">
      <div className = "body">
        <Header
          togglePage = {BasketPageView}
        />
        <NavBar
          products = {products} action = {ClickNavBtn}
        />
        <div className = "content">
          
          {showBasket == false && 
            <ProductPage //show when the condition is false.
              product = {selectedProduct} action = {ClickNavBtn} //view products available.
              addToCheckout = {AddToBasket}
              // item = {currentCategory}
            />
          }

          {showBasket == true && 
            <Basket //show when the condition is true.
              basket = {basketList} //wanted the page to store items in basket.
            /> 
          }
           
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

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


function App() {

  const[products, setProducts] = useState(
    [ //list for nav bar and product page menu.
      {
        title:"Cashmere",
        specificItems: [//product selection
                        {picture: picture, name:"1", price:"£5"}, 
                        {picture: picture, name:"2", price:"£10"}, 
                        {picture: picture, name:"3", price:"£15"}, 
                        {picture: picture, name:"4", price:"£20"}, 
                        {picture: picture, name:"5", price:"£25"}],
      },
      {
        title:"Silk",
        specificItems: [//product selection
                        {picture: picture, name:"6", price:"£30"}, 
                        {picture: picture, name:"7", price:"£35"}, 
                        {picture: picture, name:"8", price:"£40"}, 
                        {picture: picture, name:"9", price:"£45"}, 
                        {picture: picture, name:"10", price:"£50"}],  
      },
      {
        picture: picture,
        title:"Snood",
        specificItems: [ //product selection
                        {picture: picture, name:"11", price:"£55"}, 
                        {picture: picture, name:"12", price:"£60"}, 
                        {picture: picture, name:"13", price:"£65"}, 
                        {picture: picture, name:"14", price:"£70"}, 
                        {picture: picture, name:"15", price:"£75"}],
      },
      {
        title:"Shawls",
        specificItems: [//product selection
                        {picture: picture, name:"16", price:"£80"}, 
                        {picture: picture, name:"17", price:"£85"}, 
                        {picture: picture, name:"18", price:"£90"}, 
                        {picture: picture, name:"19", price:"£95"}, 
                        {picture: picture, name:"20", price:"£100"}], 
      },
      {
        title:"Headscarfs",
        specificItems: [//product selection
                        {picture: picture, name:"21", price:"£105"}, 
                        {picture: picture, name:"22", price:"£100"}, 
                        {picture: picture, name:"23", price:"£115"}, 
                        {picture: picture, name:"24", price:"£120"}, 
                        {picture: picture, name:"25", price:"£125"}], 
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

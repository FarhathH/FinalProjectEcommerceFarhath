import logo from './logo.svg';
import './App.css';
import './ecommerce.css';
import Footer from './ecommerce.footer.js';
import Header from './ecommerce.header.js';
import NavBar from './ecommerce.nav.bar.js';
import ProductPage from './ecommerce.product.pg.js';
import {useState} from 'react';
import picture from './testphoto.jpg';
import Basket from './ecommerce.basket.js';


function App() {

  const[products, setProducts] = useState(
    [ //list for nav bar and product page menu.
      {
        picture: picture,
        title:"Cashmere",
        specificItems: [ //product selection 
                      <div className = "specific-item">
                        <p>1</p>
                      </div>, 
                      <div className = "specific-item">
                        <p>2</p>
                      </div>, 
                      <div className = "specific-item">
                        <p>3</p>
                      </div>, 
                      <div className = "specific-item">
                        <p>4</p>
                      </div>, 
                      <div className = "specific-item">
                        <p>5</p>
                      </div>
                    ],
        price:"£5"
      },
      {
        picture: picture,
        title:"Silk",
        specificItems: [ //product selection 
                      <div className = "specific-item">
                        <p>6</p>
                      </div>, 
                      <div className = "specific-item">
                        <p>7</p>
                      </div>, 
                      <div className = "specific-item">
                        <p>8</p>
                      </div>, 
                      <div className = "specific-item">
                        <p>9</p>
                      </div>, 
                      <div className = "specific-item">
                        <p>10</p>
                      </div>
                    ],
        price:"£15",
      },
      {
        picture: picture,
        title:"Snood",
        specificItems: [ //product selection 
                      <div className = "specific-item">
                        <p>11</p>
                      </div>, 
                      <div className = "specific-item">
                        <p>12</p>
                      </div>, 
                      <div className = "specific-item">
                        <p>13</p>
                      </div>, 
                      <div className = "specific-item">
                        <p>14</p>
                      </div>, 
                      <div className = "specific-item">
                        <p>15</p>
                      </div>
                    ],
        price:"£19"
      },
      {
        picture: picture,
        title:"Shawls",
        specificItems: [ //product selection
                      <div className = "specific-item">
                        <p>16</p>
                      </div>, 
                      <div className = "specific-item">
                        <p>17</p>
                      </div>, 
                      <div className = "specific-item">
                        <p>18</p>
                      </div>, 
                      <div className = "specific-item">
                        <p>19</p>
                      </div>, 
                      <div className = "specific-item">
                        <p>20</p>
                      </div>
                    ],
        price:"£20"
      },
      {
        picture: picture,
        title:"Headscarfs",
        specificItems: [ //product selection
                      <div className = "specific-item">
                        <p>21</p>
                      </div>, 
                      <div className = "specific-item">
                        <p>22</p>
                      </div>, 
                      <div className = "specific-item">
                        <p>23</p>
                      </div>, 
                      <div className = "specific-item">
                        <p>24</p>
                      </div>, 
                      <div className = "specific-item">
                        <p>25</p>
                      </div>
                    ],
        price:"£3"
      },
    ]
  )
  //for viewing basket
  const[showBasket, setShowBasket] = useState(false);
    

  //For selecting the product by index.
  const[selectedProduct, setSelectedProduct] = useState(products);
  
  
  //This trigger when user clicks a button on the nav bar.
  function ClickNavBtn(index){
    setSelectedProduct(products[index])
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
          product = {products} action = {ClickNavBtn}
        />
        <div className = "content">
          
          {showBasket == false && 
            <ProductPage //show when the condition is false.
            product = {selectedProduct} action = {ClickNavBtn}
            />
          }

          {showBasket == true && 
            <Basket/> //show when the condition is true.
          }
           
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

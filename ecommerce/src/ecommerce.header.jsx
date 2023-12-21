import './ecommerce.css';
import BasketIcon from './basket-icon.jpeg';

/*
    This is the main header component.
*/
function Header({togglePage, showBasket}){
    return(
        <div className = "header">
          <div className = "logo">
            <div className = "logo-name">
              World of Scarves
            </div>
          </div>
          <div className = "search-bar">
            <input type = "text" placeholder='search...' className = "search-pls"></input>
          </div>
          <div className = "basket">
            <button onClick={togglePage} className = "basket-btn">
              <img height={"25px"} width = {"25px"} src = {BasketIcon}></img> 
            </button>
          </div>
        </div>
    );
}

export default Header;
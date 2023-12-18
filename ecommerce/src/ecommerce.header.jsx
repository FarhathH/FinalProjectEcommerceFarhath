import './ecommerce.css';


/*
    This is the main header component.
*/
function Header({togglePage, showBasket}){
    return(
        <div className = "header">
          <div className = "logo">
            <div>
              Insert logo here
            </div>
          </div>
          <div className = "search-bar">
            <button className = "search-pls">
              🔎
            </button>
          </div>
          <div className = "basket">
            <button onClick={togglePage} className = "basket-btn">
              🧺 
            </button>
          </div>
        </div>
    );
}

export default Header;
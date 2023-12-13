import './ecommerce.css';


/*
    This is the main header component.
*/
function Header(){
    return(
        <div className = "header">
          <div className = "logo">
            <div>
              Insert logo here
            </div>
          </div>
          <div className = "search-bar">
            <div className = "search-pls">
              search
            </div>
          </div>
          <div className = "basket">
            <button className = "basket-btn">
              basket
            </button>
          </div>
        </div>
    );
}

export default Header;
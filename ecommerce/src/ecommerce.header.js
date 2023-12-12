import './ecommerce.css';


/*
    This is the main header component.
*/
function Header(){
    return(
        <div className = "header">
          <div className = "logo">
            <div>Insert logo here</div>
          </div>
          <div className = "search-bar">
            <div>search</div>
          </div>
          <div className = "basket">
            <div>basket</div>
          </div>
        </div>
    );
}

export default Header;
import './ecommerce.css';

/*
    The main footer containing address and contact details
*/

function Footer(){
    return(
        <div className = "footer">
        <div className = "footer-section1">
          <div>Link 1</div>
          <div>Link 2</div>
          <div>Link 3</div>
        </div>
        <div className = "footer-section2">
          <div>Address Line 1</div>
          <div>Address Line 2</div>
          <div>Email Address | Phone</div>
          <div>Number</div>
        </div>
        <div className = "footer-section3">
          <div>Link 1</div>
          <div>Link 2</div>
          <div>Link 3</div>
        </div>
      </div>
    );
}

export default Footer;
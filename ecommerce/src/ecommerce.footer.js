import './ecommerce.css';

/*
    The main footer containing address and contact details.
*/

function Footer(){
    return(
        <div className = "footer">
        <div className = "footer-section1">
          <a href=''>Link 1</a>
          <a href=''>Link 2</a>
          <a href=''>Link 3</a>
        </div>
        <div className = "footer-section2">
          <div>Address Line 1</div>
          <div>Address Line 2</div>
          <div>Email Address | Phone</div>
          <div>Number</div>
        </div>
        <div className = "footer-section3">
            <a href=''>Link 1</a>
            <a href=''>Link 2</a>
            <a href=''>Link 3</a>
        </div>
      </div>
    );
}

export default Footer;
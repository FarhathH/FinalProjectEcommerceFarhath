import './ecommerce.css';
import {useState} from 'react';

function NavBar(){

    const[navigationList, setNavigationList] = useState(
        [
            "Cashmere",
            "Silk",
            "Snood",
            "Plaid",
            "Shawls",
            "Headscarfs"
        ]
    );


   
    return(
        <div className = "nav-bar">
          <div className = "nav-section"></div>
          
        </div>
    );
}

export default NavBar;
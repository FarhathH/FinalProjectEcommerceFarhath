import './ecommerce.css';
import {useState} from 'react';
import App from './App.js';

function NavBar({product, action}){

    const[navigationList, setNavigationList] = useState(
        [ //list of items for nav bar
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
            {navigationList.map((nav, index) =>{ //map for generating nav-bar buttons
                return(
                    <button className = "nav-section" onClick = {() => action(index)}>{nav}</button>
                );
            })}
        </div>
    );
   
}

export default NavBar;
import './ecommerce.css';
import {useState} from 'react';
import App from './App.js';

function NavBar(product, action){

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
            {navigationList.map((nav) =>{
                return(
                    <button className = "nav-section" onClick = {() => action(product)}>{nav}</button>
                );
            })}
        </div>
    );
   
}

export default NavBar;
import './ecommerce.css';
import {useState} from 'react';

function NavBar(props){

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
                    <button className = "nav-section" onClick = {() => props.action(props.index)}>{nav}</button>
                );
            })}
        </div>
    );
   
}

export default NavBar;
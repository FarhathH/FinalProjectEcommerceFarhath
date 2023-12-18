import './ecommerce.css';
import ProductPage from './ecommerce.product.pg.jsx'; 
import {useState} from 'react';
import App from './App.js';

function NavBar({product, action}){

    

   
    return(
        <div className = "nav-bar">
            {product.map((nav, index) =>{ //map for generating nav-bar buttons
                return(
                    <button className = "nav-section" onClick = {() => action(index)}>{nav.title}</button>
                );
            })}
        </div>
    );
   
}

export default NavBar;
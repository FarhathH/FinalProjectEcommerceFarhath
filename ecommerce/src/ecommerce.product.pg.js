import './ecommerce.css';
import {useState} from 'react';
import App from './App.js';

function ProductPage({product, action}){
    return(
        
        
        <div className = ""> {/*meant to display the info about product*/}
            <h2>
                <p>{product.picture}</p>
                <p>{product.title}</p>
                <p>{product.price}</p>
            </h2>
             
        </div>
         
    );
}

export default ProductPage;
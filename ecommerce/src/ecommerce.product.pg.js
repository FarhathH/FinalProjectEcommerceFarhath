import './ecommerce.css';
import {useState} from 'react';
import App from './App.js';

function ProductPage({product, action}){
    return(
        
        
        <div> {/*meant to display the info about product*/}
            <h2>{product.title}</h2>
             
        </div>
         
    );
}

export default ProductPage;
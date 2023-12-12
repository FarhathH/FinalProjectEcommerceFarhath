import './ecommerce.css';
import {useState} from 'react';
import App from './App.js';

function ProductPage(product){
    return(
        <div>
            <div>{product.title}</div>
            <div>{product.price}</div>
        </div>
    );
}

export default ProductPage;
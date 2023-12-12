import './ecommerce.css';
import {useState} from 'react';
import App from './App.js';

function ProductPage({product}){
    return(
        product.map((prod, index) =>{
            return(
                <div>
                    <div>{prod.title}</div>
                    <div>{prod.price}</div>
                </div>
            );
        })
    );
}

export default ProductPage;
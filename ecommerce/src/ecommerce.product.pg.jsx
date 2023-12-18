import './ecommerce.css';
import {useState} from 'react';
import App from './App.js';

function ProductPage({product, addToCheckout, item}){

   
   
    return(
        
        
        <div className = ""> {/*meant to display the info about product*/}
            <h2>
                {/* <p>{product.picture}</p> */}
                <p>{product.title}</p>
                
                {product.map((i,index) =>{
                    return(
                        <div className = "specific-item">
                            <p className = "category-list">{i.specificItems}</p>
                            {/*should add item into basket when button is clicked*/}
                            <button onClick = {() => addToCheckout(index)}className = "addItem-btn">Add to basket</button>
                        </div>

                    );

                })}

            </h2>
             
        </div>
         
    );
}

export default ProductPage;
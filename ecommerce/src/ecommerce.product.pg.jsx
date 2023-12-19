import './ecommerce.css';
import {useState} from 'react';
import App from './App.js';

function ProductPage({product, addToCheckout}){

   
   
    return(
        
        
        <div className = ""> {/*meant to display the info about product*/}
            <h2>
                <p>{product.title}</p>
            </h2>  
                <div className = "category-list">
                    {product.specificItems.map((item, index) =>{
                        return(
                            
                            <div className = "specific-item">
                                <img height={"100px"} width={"100px"} src = {item.picture}></img>
                                <p className = "item-info">Product: {item.name}</p>
                                <p className = "item-info">Price: {item.price}</p>
                                {/*should add item into basket when button is clicked*/}
                                <button onClick = {() => addToCheckout(item)}className = "addItem-btn">Add to basket</button>
                            </div>
                            

                        );

                    })}
                </div>

            
             
        </div>
         
    );
}

export default ProductPage;
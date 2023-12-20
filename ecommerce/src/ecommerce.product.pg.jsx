import './ecommerce.css';
import {useState} from 'react';
import App from './App.js';

function ProductPage({product, addToCheckout}){ //the props used for this to work.

   /*
        The map function below will list all the items in the category selected.
   */
   
    return(
        
        <div className = "product-info"> {/*meant to display the info about product*/}
            <h2>
                <p>{product.title}</p> {/* will display the category title*/}
            </h2>  
                <div className = "category-list">
                    {product.specificItems.map((item, index) =>{
                        return(
                            <div className = "specific-item">
                                <img height={"150px"} width={"150px"} src = {item.picture}></img>
                                <p className = "item-info">Product: {item.name}</p>
                                <p className = "item-info">Price: {item.price}</p>
                                {/*should add item into basket when button is clicked and uses the item as a parameter*/}
                                <button onClick = {() => addToCheckout(item)}className = "addItem-btn">Add to basket</button>
                            </div>
                        
                        );

                    })}
                </div>

            
             
        </div>
         
    );
}

export default ProductPage;
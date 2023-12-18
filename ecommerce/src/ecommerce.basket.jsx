import {useState} from "react";
import './ecommerce.css';


function Basket(basket){
    return(
        <div className = "basket-display">
            <div>{basket.specificItem}</div>
        </div>
    );
}

export default Basket;

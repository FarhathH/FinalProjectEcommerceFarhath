import {useState} from "react";
import './ecommerce.css';


function Basket({basket}){ //uses the basketList array as a prop.
    console.log(basket)
    let total = 0
    return(

        <div className = "basket-display">
            {basket.map((bas) => { //mapping through the basketList array that contains items.
                        total+=bas.value
                return(
                    <div className = "basket-item">
                        <img width={"25px"} height={"25px"} src = {bas.pic}></img> {/*meant to display what in the basket*/}
                        <div>{bas.name}</div> {/*meant to display what in the basket*/}
                        <div>{bas.price}</div>
                        
                    </div>   
                );
            })} 

            <div>Total cost:{total}</div>
        </div>
    );
}

export default Basket;

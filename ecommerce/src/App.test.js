import { render, screen } from '@testing-library/react';
import App from './App';
import {useState} from 'react';
import picture from './testphoto.jpg';

// to display info menu based on product category selected.
const[products, setProducts] = useState(
  [ //list for nav bar and product page menu.
    {
      picture: picture,
      title:"Cashmere",
      specificItems: [1, 2, 3, 4, 5],//product selection
      price:"£5"
    },
    {
      picture: picture,
      title:"Silk",
      specificItems: [6, 7, 8, 9, 10], //product selection 
      price:"£15",
    },
    {
      picture: picture,
      title:"Snood",
      specificItems: [11, 12, 13, 14, 15], //product selection 
      price:"£19"
    },
    {
      picture: picture,
      title:"Shawls",
      specificItems: [16, 17, 18, 19, 20], //product selection
      price:"£20"
    },
    {
      picture: picture,
      title:"Headscarfs",
      specificItems: [21, 22, 23, 24, 25], //product selection
      price:"£3"
    },
  ]
)




    

// import {render, screen} from '@testing-library/react';
// import App from './App';
// import {useState} from 'react';
// import picture from './testphoto.jpg';


//a test array to try and add value objects together.
let basketList =  [
                    { name:"21", price:"£105", value:105},
                    { name:"22", price:"£100", value:100}
                  ]

//making the comparisons to check it works.
let expectedOutput = 205
let total = 0;


//
for(let i = 0; i < basketList.length-1;i++){
  console.log(basketList[i].value)
  total+=basketList[i].value
}


console.log(basketList)
console.log(total)
console.log(total == expectedOutput)



    

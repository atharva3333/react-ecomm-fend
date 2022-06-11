import React, {useState} from 'react';
import './App.css';
import './Allcards';
import Allcards from './Allcards';
import Laptopcards from './Laptopcards'
import Apismartphone from './Apismartphone';
import Apilaptops from './Apilaptops';

function Shop() {
   const [smartData, setSmartData] = useState(Apismartphone);
   const [laptopData, setLaptopData] = useState(Apilaptops);
  
  return (
    <div>
      <nav className='category'>
        <ul className='category-list' >
          <li><a href='#Phones'>Smartphones</a></li>
          <li><a href='#Laptops'>Laptops</a></li>
          
        </ul>
      </nav>

      <h1 id='Phones'>Smartphones</h1>

      <Allcards smartData = {smartData}
         
      />

      <h1 id='Laptops'>Laptops</h1>

      <Laptopcards laptopData ={laptopData}/>

       
    </div>
  );
}

export default Shop;

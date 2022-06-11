import './App.css';
import React from 'react'


const Allcards = ({smartData}) => {
  
  return (

    <>
    <div className="main">
    <ul className="cards">
    {smartData.map((curElem)=> {
      return (
         <>
        
       
      <li className="cards_item" key={curElem.id}>
      <div className="card">
        <div className="card_image"><img src={curElem.img}/></div>
        <div className="card_content">
          <h2 className="card_title">{curElem.title}</h2>
          <p className="card_text">Price:{curElem.text}</p>
          <button className="btn card_btn">Buy Now</button>
        </div>
      </div>
    </li>
    

</>
      )
    })}
    </ul>
    </div>
   


</>
  )
}

export default Allcards;
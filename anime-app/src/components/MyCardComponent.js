import React from 'react'


function MyCardComponent(props) {
    const { card } = props;
   return (
     <button onClick={() => window.location.href(card.link)}> // history.push(url)
       <span>{card.title}</span>
       <img src={card.image} alt="manga" />
     </button>
   )
  }
 
  export default MyCardComponent;
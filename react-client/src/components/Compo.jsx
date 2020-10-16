import React from 'react';

function Compo(props) {
    return (
      <div >
           
           <button onClick={props.onClick} name="products" >Enter </button>  
      </div>
    );
  }
 export default Compo;
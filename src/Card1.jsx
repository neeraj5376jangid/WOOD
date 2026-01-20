import React from 'react'
import { ArrowRight } from 'lucide-react'

const Card1 = (props) => {
  const Booknew = () => {
    
    

    const upiLink = "https://wa.me/qr/UVNRQNA7TUC4D1";

    window.location.href = upiLink;
  };
  return (
    <>
  
        <div class="main-box" >
        <div class="left">
          <img src={props.Logo} alt="Image"></img>
        </div>

        <div class="right">
          <h2>{props.Name}</h2>
          <p>
            {props.tag1}
          </p>
          <button onClick={Booknew}>Book new<ArrowRight /></button>
        </div>
      </div>

    
      
    </>

  )
}

export default Card1

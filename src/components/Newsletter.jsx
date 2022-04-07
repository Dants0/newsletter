import React from 'react'
import '../assets/newsletter.css'

const sendMessage = () =>{

}




const Newsletter = () => {
  return (
    <div>
        <div className="container">
            <h1>Newsletter</h1>
            <p>Noticias diárias sobre o espaço e tech's. 🚀</p>
            <p>Inscreva-se agora no Newsletter SpX.</p>
            <input type="Email" placeholder="Email" className="emailInput"/>
            <input type="submit" value="Subscribe" className="subsInput"/>
        </div>
    </div>
  )
}

export default Newsletter;
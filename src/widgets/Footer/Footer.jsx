import React from 'react'
import './Footer.css'

import Group from '../../shared/img/Group 2.svg'
import Place from '../../shared/img/Place.svg'
import Email from '../../shared/img/Email.svg'
import Phone from '../../shared/img/Phone.svg'
import Group3 from '../../shared/img/Group 3.svg'



export default function Footer() {

    let getData = (e) => {
        e.preventDefault()
        let data = e.target[0].value
        console.log(data);
    }


  return (
    <footer>
        <div className='footer_email_img'>
            
            <img className='img' src={Group} alt="" />
            <form className='email_content'
                onSubmit={getData}
            >
                <h3>Abonați-vă la newsletter</h3>
                <input type="email" placeholder='E-mail adress' />
                <button className='email_subscribe'>
                    <img src={Group3} alt="" />
                    <p>Subscribe</p>
                </button>
            </form>
        </div>
        <div className='footer_info_text'>
            <div className="footer_menu">
                <h3>MENIU</h3>
                <a href=""> <span> Catalog </span></a>
                <a href=""> <span> Despre noi </span></a>
                <a href=""> <span> Contacte </span></a>

            </div>
            <div className="footer_info">
                <h3>INFORMATII</h3>
                <a href=""> <span> Politica de confindedtialitatea </span></a>
                <a href=""> <span> Conditii generale </span></a>
                <a href=""> <span> Livrarea </span></a>

            </div>
            <div className="footer_contacte">
                <h3>CONTACTE</h3>
                <div className="footer_place">
                    <img src={Place} alt="" />                
                    <span>Republica Moldova, Comrat, str. Lenina 25/2 </span>
                </div>
                <div className="footer_email">
                    <img src={Email} alt="" />
                    <span>lrmoldova@yahoo.com</span>
                </div>
                <div className="footer_phone">
                    <img src={Phone} alt="" />
                    <span>+37378754754</span>
                </div>
            </div>

        </div>

    </footer>
  )
}

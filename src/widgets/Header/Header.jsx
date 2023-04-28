import React, { Component, useState } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import rus from '../../shared/img/rus 1.jpg'
import ro from '../../shared/img/ro 1.jpg'
import white_logo from '../../shared/img/white-logo 1.svg'
import header_cart from '../../shared/img/header-cart.svg'
import vector from '../../shared/img/Vector 6.svg'


export default function Header() {
    const [nav, setNav] = useState(false)
    const [open, setOpen] = useState(false);

  return (
        <div>
            <div>
            <div onClick={() => setOpen(false)} className={`bg ${open ? '' : 'login'} `}></div>
            <div className="login-in">
                <div className={`login-wrap  ${open ? '' : 'login'} `}>
                    <span onClick={() => setOpen(false)}  class="closse">&times;</span>
                    <h2>Autentificare</h2>
                    
                    <div className="form">
                            <span>E-mail</span>
                        <input type="text" name="un" />
                        <br/>
                            <span>Porola</span>
                        <input type="password"  name="pw" />
                        <button> Sign in </button>
                            <div className="form_a">
                            <a href="#"> <p>Inregistrati-va</p></a>
                            <a href="#"> <p> V-ati uitat parola? </p></a>
                            </div>
                    </div>
                </div>
            </div>



        <header className="header">
        <div className="header_logo">
            <div className="language">
                <a  href="" > <img src={rus} alt="#"/></a>
                <a href=""><img src= {ro} alt="#"/></a>
            </div>
            <Link to="/"><img src={white_logo} alt="#"/></Link>
            <div className="header_icon">
                <ul className="header_nav_icon">
                    <li className="sub-menu-parent_icon" tab-index="0">
                        <div className="logo_user">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" fill="none" stroke="#666" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
                                <path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" fill="none" stroke="#666" stroke-miterlimit="10" stroke-width="32"/>
                                </svg>
                        </div>
                            
                    <ul className="sub-menu_icon">
                        <li><a onClick={() => setOpen(true)} class="log_in" href="#">LOG IN </a></li>
                        <li><Link to="profile">PROFILE</Link></li>

                    </ul>
                    </li>    
                </ul>    
                
                <a href=""><img src={header_cart} alt=""/></a>
            </div>
        </div>
        <nav className={"nav" + ((nav) ? "" : "nav_active")}>
            <ul className="header_nav">
                <li className="sub-menu-parent" tab-index="0">
                    <a  href="#"> DESPRE NOI <img src={vector} alt=""/></a>
                <ul className="sub-menu">
                    <li><a href="#">Sub Item 1 </a></li>
                    <li><a href="#">Sub Item 2</a></li>
                    <li><a href="#">Sub Item 3</a></li>
                    <li><a href="#">Sub Item 4</a></li>
                </ul>
                </li>
                <li className="sub-menu-parent" tab-index="0">
                    <a href="#">SUPLIMENTE <img src={vector} alt=""/></a>
                <ul className="sub-menu">
                    <li><a href="#">Sub Item 1</a></li>
                    <li><a href="#">Sub Item 2</a></li>
                    <li><a href="#">Sub Item 3</a></li>
                    <li><a href="#">Sub Item 4</a></li>
                </ul>
                </li>
                <li className="sub-menu-parent" tab-index="0">
                    <a href="#">PARFUMURI <img src={vector} alt=""/></a>
                <ul className="sub-menu">
                    <li><a href="#">Sub Item 1</a></li>
                    <li><a href="#">Sub Item 2</a></li>
                    <li><a href="#">Sub Item 3</a></li>
                    <li><a href="#">Sub Item 4</a></li>
                </ul>
                </li>
                <li className="sub-menu-parent" tab-index="0">
                    <a href="#">COSMETICE <img src={vector} alt=""/></a>
                <ul className="sub-menu">
                    <li><a href="#">Sub Item 1</a></li>
                    <li><a href="#">Sub Item 2</a></li>
                    <li><a href="#">Sub Item 3</a></li>
                    <li><a href="#">Sub Item 4</a></li>
                </ul>
                </li>
                <li className="sub-menu-parent" tab-index="0">
                    <a href="#">ACCESORII <img src={vector} alt=""/></a>
                <ul className="sub-menu">
                    <li><a href="#">Sub Item 1</a></li>
                    <li><a href="#">Sub Item 2</a></li>
                    <li><a href="#">Sub Item 3</a></li>
                    <li><a href="#">Sub Item 4</a></li>
                </ul>
                </li>
                <li className="sub-menu-parent " tab-index="0">
                    <a href="#">OFERTE <img src={vector} alt=""/></a>
                <ul className="sub-menu">
                    <li><a href="#">Sub Item 1</a></li>
                    <li><a href="#">Sub Item 2</a></li>
                    <li><a href="#">Sub Item 3</a></li>
                    <li><a href="#">Sub Item 4</a></li>
                </ul>
                </li>
                </ul>
        </nav>
            <button onClick={() => setNav(!nav)} type="button" 
                className={"menu-icon " + ((nav) ? "menu-icon--active" : "")}>
                {nav ?
                <div class="menu-icon--active"></div>
                :
                <div class="menu-icon__line"></div>
                }

            </button>

    </header>
    </div>
    </div>
  )
}



import { Carousel } from './ui/Carousel'
import React from 'react'
import Advertising from './Advertising/Advertising'
import Product from './Product/Product'
import baner1 from '../img/Baner1.png'
import './Main.css'



export default function Main() {
  return (
    <div className="main">


       <Carousel>
          <div className='item item-1'> <img src= {baner1} alt="#"/></div>
          <div className='item item-2'> <img src= {baner1} alt="#"/></div>
          <div className='item item-3'> <img src= {baner1} alt="#"/></div>
        </Carousel>
        <Advertising/>
        <Product/>

    </div>
  )
}

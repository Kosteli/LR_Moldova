import React from 'react'

import './Product.css'
import Product1 from '../../img/Product1.png'



export default function Product() {
  return (
    <div>
                <section className="main_product">
            <div className="product_text">
                <div className="text_HR"></div>
                <h4>PRODUSE OFERITE</h4>
                <div className="text_HR"></div>
            </div>
            <div className="product_text_p">
                <p>Vizitați magazinul nostru pentru a utiliza numai produse de cea mai înaltă calitate</p>
            </div>
            <div className="product_tab">
                <a href="">OFERTE LUNII</a>
                <a href="">REDUCERI</a>
            </div>
            <div className="product_catalog">
                <div className="product_catalog_img">
                    <a href=""><img src={Product1} alt="" /></a>
                </div>
                <div className="product_catalog_img">
                    <a href=""><img src={Product1} alt="" /></a>
                </div>
                <div className="product_catalog_img">
                    <a href=""><img src={Product1} alt="" /></a>
                </div>
                <div className="product_catalog_img">
                    <a href=""><img src={Product1} alt="" /></a>
                </div>
                <div className="product_catalog_img">
                    <a href=""><img src={Product1} alt="" /></a>
                </div>
                <div className="product_catalog_img">
                    <a href=""><img src={Product1} alt="" /></a>
                </div>
            </div>

        </section>
    </div>
  )
}

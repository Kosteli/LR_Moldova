import React from 'react'
import  './Advertising.css'
import MainLogo1 from '../../img/MainLogo1.jpg';
import MainLogo2 from '../../img/MainLogo2.jpg';
import MainLogo3 from '../../img/MainLogo3.jpg';
import MainLogo4 from '../../img/MainLogo4.jpg';
import MainLogo5 from '../../img/MainLogo5.jpg';
import NewInfo1 from '../../img/NewInfo1.png';
import NewInfo2 from '../../img/NewInfo2.png';
import NewInfo3 from '../../img/NewInfo3.png';




export default function Advertising() {
  return (
    <div>
            <div className="sponsors">
                <img src={MainLogo1} alt="" />
                <img src={MainLogo2} alt="" />
                <img src={MainLogo3} alt="" />
                <img src={MainLogo4} alt="" />
                <img src={MainLogo5} alt="" />

            </div>
            <div className="new_post">
                <div className="post1">
                        <img src={NewInfo1} alt="" />
                    <div className="post_info_text">
                        <h4>Produse Noi</h4>
                        <a href="">DETALI</a>
                    </div>
                </div>
                <div className="post2_all">
                    <div className="post2">
                        <img src={NewInfo2} alt="" />
                        <div className="post_all_info">
                            <div className="post2_info_text">
                                <h4>Produse Noi</h4>
                                <a href="">DETALI</a>
                            </div>
                        </div>
                    </div>
                    <div className="post3">
                        <img src={NewInfo3} alt="" />
                        <div className="post_all_info">
                            <div className="post2_info_text">
                                <h4>Produse Noi</h4>
                                <a href="">DETALI</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

import React from 'react'
import { useState } from 'react'
import './Profile.css'
import User from '../shared/img/UserPic1.svg'
import ProductFavorite  from '../shared/img/Product  1 tab.png'

export default function Profile() {

        const [toggleState, setToggleState] = useState(1);
        const toggleTab = (index) => {
           setToggleState(index);
        }
 

    
  return (
    <main>
    <section className="my_profil">
        <h1>MY ACCOUNT</h1>
        <div className="profil_info">
           <img src={User} alt="" />
            <span>Nichita Colev</span>
        </div>
    </section>


    <section >
        <div>
            <div className="tabs">
                
              <div className="line"></div>
              <div className={toggleState === 1 ? "tab-item active" : 'tab-item'}
              onClick={() => toggleTab(1)}>
                <p className="tab-icon fas fa-code"
                ></p>
                React
              </div>
              <div className={toggleState === 2 ? "tab-item active" : 'tab-item'} 
              onClick={() => toggleTab(2)}>
                <p className="tab-icon fas fa-cog"></p>
                Angular
              </div>
              <div className={toggleState === 3 ? "tab-item active" : 'tab-item'}
              onClick={() => toggleTab(3)}>
                <p className="tab-icon fas fa-plus-circle"></p>
                Ember
              </div>
            </div>
          
           
            <div className="tab-content">
              <div 
              className={toggleState === 1 ? "tab-pane active" : 'tab-pane'}>
                <div className="tap_zag">
                    <div className="tap_pref"></div>
                    <h2>Informatii ale utilizatorului</h2>
                </div>
                <div className="tab_input">
                    <span>E-mail</span>
                    <input type="email" name="un" />
                   
                    <span>Porola</span>
                    <input type="password"  name="pw" />
                 
                    <span>Porola</span>
                    <input type="password"  name="pw" />
                </div>
                
                <div className="tap_zag">
                    <div class="tap_pref"></div>
                    <h2>Informatii ale utilizatorului</h2>
                </div>
                <div className="tab_input">
                    <span>E-mail</span>
                    <input type="email" name="un" />
             
                    <span>Porola</span>
                    <input type="password"  name="pw" />
      
                    <span>Porola</span>
                    <input type="password"  name="pw" />
                </div>
                <div className="tab_bottom">
                    <button> SALVEAZA </button>
                </div>

            </div>
              <div className={toggleState === 2 ? "tab-pane active" : 'tab-pane'}>
                <div className="tap_zag">
                    <div class="tap_pref"></div>
                    <h2>INFO</h2>
                </div>
                <div>
                    <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
                </div>
              </div>
              <div className={toggleState === 3 ? "tab-pane active" : 'tab-pane'}>
                <div className="tap_shop">  
                    <img src={ProductFavorite} alt="" />
                    <img src={ProductFavorite} alt="" />
                    <img src={ProductFavorite} alt="" />
                    <img src={ProductFavorite} alt="" />
                    <img src={ProductFavorite} alt="" />
                    <img src={ProductFavorite} alt="" />
                </div>
                <div className="tab_bottom2">
                    <button> Șterge </button>
                </div>
              </div>

            </div>
          </div>
    </section>
</main>
  )
}

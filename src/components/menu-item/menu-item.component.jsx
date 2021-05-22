import React from 'react';
import './menu-item.styles.scss';


const MenuItem = ({ title, imageUrl ,size }) => (
    <div 
         
    className={`${size} menu-item`}
    >
        <div className='background-image'
               style={{
                backgroundImage: `url(${imageUrl})`
            }}
            />
                <div className='content'>
                    <h1 className='title'>HATS</h1>
                    <span>SHOP</span>
                </div>
            </div>
)

export default MenuItem;
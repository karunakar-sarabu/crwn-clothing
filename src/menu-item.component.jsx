import React from 'react';
import './menu-item.styles.scss';

const MenuItem=({title,imageUrl})=>(
    <div 
        style={{
            backgroundImage:`url(${imageUrl})`
        }}
        className='menu-item'>
        <div className='content'>
            <div className='title'>{title}</div>
            <div className='subtitle'>SHOP NOW</div>
        </div>
     </div>   
)
export default MenuItem
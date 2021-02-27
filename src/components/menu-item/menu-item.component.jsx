import React from 'react'
import './menu-item.styles.scss'
//import {WithRouter} from 'react-router-dom';

// const MenuItem=({title,imageUrl,size,history})=>(
//     <div className={`${size} menu-item`} onClick={()=>history.push()}>
//             <div 
//             className='background-image'
//             style={{
//                 backgroundImage:`url(${imageUrl})`
//             }}/>
    
//             <div className='content'>
//                 <h1  className='title'>{title.toUpperCase()}</h1>
//                 <span className='subtitle'>SHOP NOW</span>
//             </div>
//     </div>
// )
// //export default WithRouter(MenuItem)
// export default MenuItem;
const MenuItem=({title,imageUrl,size})=>(
    <div 
    style={{
        backgroundImage:`url(${imageUrl})`
    }}
     className={`${size} menu-item`}>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='subtitle'>SHOP NOW</div>
        </div>
    </div>

)   
export default MenuItem
import React from 'react'
import './B_Control.css'
export const B_Control = (props) => {
  return (
   <div className='BuildControl'>
        <div className='Label'>{props.label}</div>
        <button className='Less' onClick={props.removed} disabled={props.disabled}>Less</button>
        <button className='More' onClick={props.added}>More</button>
   </div>
    
  )
}

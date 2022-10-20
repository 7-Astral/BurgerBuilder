import React from 'react'
import './BuildControl.css'
import { BControl } from './B_Control/B_Control.js'

export const BuildControl = (props) => {
    const controls=[
        {label:'Salad',type:'salad'},
        {label:'Bacon',type:'bacon'},
        {label:'Cheese',type:'cheese'},
        {label:'Meat',type:'meat'},
    ];
  return (
    <div className='BuildControls'>
      <p>Current Price:<strong>{props.price.toFixed(2)}</strong></p>
        {controls.map((ctrl)=>
            <BControl key={ctrl.label} label={ctrl.label} added={()=>props.ingredientAdd(ctrl.type)} removed={()=>props.ingredientRemove(ctrl.type)}
            disabled={props.disabled[ctrl.type]}/>
        )}
        <button className='OrderButton' disabled={!props.purchasable} onClick={props.ordered}>ORDER NOW</button>
    </div>
  )
}

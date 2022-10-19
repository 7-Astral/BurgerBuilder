import React from 'react'
import './BuildControl.css'
import { B_Control } from './B_Control/B_Control.js'

export const BuildControl = (props) => {
    const controls=[
        {label:'Salad',type:'salad'},
        {label:'Bacon',type:'bacon'},
        {label:'Cheese',type:'cheese'},
        {label:'Meat',type:'meat'},
    ];
  return (
    <div className='BuildControls'>
        {controls.map((ctrl)=>
            <B_Control key={ctrl.label} label={ctrl.label} added={()=>props.ingredientAdd(ctrl.type)} removed={()=>props.ingredientRemove(ctrl.type)}
            disabled={props.disabled[ctrl.type]}/>
        )}
    </div>
  )
}

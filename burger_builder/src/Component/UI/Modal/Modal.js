import React from 'react'
import Aux1 from '../../../hoc/aux1'
import { Backdrop } from '../Backdrop/Backdrop'
import './Modal.css'
export const Modal = (props) => {
  return (
    <Aux1>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
   
    <div className='Modal' style={{transform:props.show?'translateY(0)':'translateY(-100vh)',
    opacity:props.show?'1':'0'
    }}>
        {props.children}
    </div>
    </Aux1>
  )
}

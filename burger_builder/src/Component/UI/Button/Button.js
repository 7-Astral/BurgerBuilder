import React from 'react'
import './Button.css'
export const Button = (props) => {
  return (
    <button className={["Button",props.btnType].join(' ')}
    onClick={props.clicked}>{props.children}</button>
  )
}

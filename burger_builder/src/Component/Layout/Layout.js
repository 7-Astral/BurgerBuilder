import React from 'react'
import Aux1 from '../../hoc/aux1'
import './Layout.css' 
export const Layout = (props) => {
  return (
    <Aux1> 
    <div>Toolbar SideDrawer,BackDrop</div>
    <main className="Content">
        {props.children}
    </main>
    </Aux1>  
  )
}

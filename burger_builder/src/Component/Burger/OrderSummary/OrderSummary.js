import React from 'react'
import Aux1 from '../../../hoc/aux1'
import { Button } from '../../UI/Button/Button';

export const OrderSummary = (props) => {
    const ingredientSummary=Object.keys(props.ingredient).map((igKey)=>{
        return (
        <li key={igKey}>
            <span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredient[igKey]}
        </li>);
    });
  return (
    <Aux1>

         <h3>Your Order:</h3>
         <p>A Delicious Burger with he following ingredients:</p>
         <ul>
            {ingredientSummary}
         </ul>
         <p><strong>Total Price:</strong>{props.price.toFixed(2)}</p>
         <p>Continue to CheckOut?</p>

         <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
         <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
    </Aux1>   
  )
}

import React from 'react'
import  './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
 const Burger = (props) => {
  let transformedIngredients=Object.keys(props.ingredient)
      .map((igKey)=>{
        return[...Array(props.ingredient[igKey])].map((_,i)=>{
          return <BurgerIngredient key={igKey+i} type={igKey}/>;
        });
      })
      .reduce((arr,el)=>{
        return arr.concat(el)
      },[]);
      if(transformedIngredients.length===0)
      {
        transformedIngredients=<p>Please Start Add Ingredient</p>
      }
  return (
    <div className="Burger">
    
        <BurgerIngredient type="bread-top"></BurgerIngredient>
              {transformedIngredients}
        <BurgerIngredient type="bread-bottom"></BurgerIngredient> 
    </div>
  )
}
export default Burger;
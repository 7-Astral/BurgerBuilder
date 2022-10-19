import "./BurgerBuilder.css"
import React, { Component } from "react"
import Aux1 from "../../hoc/aux1";
import  Burger  from "../../Component/Burger/Burger.js";
import { BuildControl } from "../../Component/Burger/BuildControl/BuildControl.js";

const INGREDIENT_PRICES={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
};
class BurgerBuilder extends Component{
    /*constructor(props){
        super(props)
        this.state={...}
    }*/
    state={
        ingredient:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4
    };
    addIngredientHandler=(type)=>{
        const oldCount=this.state.ingredient[type];
        const updatedCounted=oldCount+1;
        const updatedIngrdient={
            ...this.state.ingredient
        };
        updatedIngrdient[type]=updatedCounted;
        const PriceAddition=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice+PriceAddition;
        this.setState({totalPrice:newPrice,ingredient:updatedIngrdient});
    };
    removeIngredientHandler=(type)=>{
        const oldCount=this.state.ingredient[type];
        if(oldCount<=0)
        {
            return;
        }
        const updatedCounted=oldCount-1;
        const updatedIngrdient={
            ...this.state.ingredient
        };
        updatedIngrdient[type]=updatedCounted;
        const PriceReduce=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice-PriceReduce;
        this.setState({totalPrice:newPrice,ingredient:updatedIngrdient});
    };
    render(){
        const disabledInfo={
            ...this.state.ingredient
        };
        for(let key in disabledInfo)
        {
            disabledInfo[key]=disabledInfo[key]<=0
        }
        return(
         <Aux1>
                <Burger ingredient={this.state.ingredient}/>
                <BuildControl ingredientAdd={this.addIngredientHandler} ingredientRemove={this.removeIngredientHandler} disabled={disabledInfo}/>
           </Aux1>
        );
    }
}

export default BurgerBuilder;
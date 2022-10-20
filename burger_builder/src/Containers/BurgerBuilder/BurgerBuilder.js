import "./BurgerBuilder.css"
import React, { Component } from "react"
import Aux1 from "../../hoc/aux1";
import  Burger  from "../../Component/Burger/Burger.js";
import { BuildControl } from "../../Component/Burger/BuildControl/BuildControl.js";
import { Modal } from "../../Component/UI/Modal/Modal";
import { OrderSummary } from "../../Component/Burger/OrderSummary/OrderSummary";

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
        totalPrice:4,
        purchasable:false,
        purchasaing:false
    };
    updatePurchaseState(ingredients){
        
        const sum=Object.keys(ingredients).map(igKey=>{
            return ingredients[igKey];
        })
        .reduce((sum,el)=>{
            return sum+el;
        },0);
        this.setState({purchasable:sum>0});
    }
    purchaseHandler=()=>
    {
        this.setState({purchasaing:true});
    }
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
        this.updatePurchaseState(updatedIngrdient);
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
        this.updatePurchaseState(updatedIngrdient);
    };
    purchaseCancelHandler=()=>{
        this.setState({purchasaing:false});
    }
    purchaseContinuehandler=()=>{
        alert('You Can Continue....');
    }
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
                <Modal show={this.state.purchasaing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredient={this.state.ingredient} purchaseCanceled={this.purchaseCancelHandler}
                    price={this.state.totalPrice}
                    purchaseContinue={this.purchaseContinuehandler }/>
                </Modal>
                <Burger ingredient={this.state.ingredient}/>
                <BuildControl 
                ingredientAdd={this.addIngredientHandler} 
                ingredientRemove={this.removeIngredientHandler} 
                disabled={disabledInfo} 
                price={this.state.totalPrice}
                purchasable={this.state.purchasable}
                ordered={this.purchaseHandler}
                />
           </Aux1>
        );
    }
}

export default BurgerBuilder;
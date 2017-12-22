import React ,{Component} from "react";

import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
};

class BurgerBuilder extends Component{
// constructor(props){
// super(props);
// this.state="";
// }

state={
    ingredients:{
        salad:0,
        bacon:0,
        cheese:0,
        meat:0
    },
    totalPrice:4,
    purchaseable:false
}

// to check atleast we have one ingredient in burger

updatePurchaseState(){
    const ingredients={
        ...this.state.ingredients
    };
    const sum=Object.keys(ingredients)
    .map((igKey)=>{
        return ingredients[igKey];
    })
    .reduce((sum,el)=>{
    return sum+el;
    
    },0);
    this.setState({
        purchaseable:sum>0
    })
}

// adding ingredients to the burger ..
addIngredientHandler=(type)=>{
 const oldCount=this.state.ingredients[type];
 const updatedCount=oldCount+1;
 const updatedIngredients={
     ...this.state.ingredients
 }
 
 updatedIngredients[type]=updatedCount;

 const priceAddition=INGREDIENT_PRICES[type];
 const oldPrices=this.state.totalPrice;
 const newPrice=oldPrices+priceAddition;
 this.setState({
      totalPrice:newPrice,
      ingredients:updatedIngredients
 })

}


removeIngredeint=(type)=>{

    const oldCount=this.state.ingredients[type];
if(oldCount<=0){
    return "";
}

    const updatedCount=oldCount-1;
    const updatedIngredients={
        ...this.state.ingredients
    }
    updatedIngredients[type]=updatedCount;
   
    const priceDeduction=INGREDIENT_PRICES[type];
    const oldPrices=this.state.totalPrice;
    const newPrice=oldPrices-priceDeduction;
    this.setState({
         totalPrice:newPrice,
         ingredients:updatedIngredients
    })
}


    render(){

const disableInfo={
    ...this.state.ingredients
};
for(let key in disableInfo){
    disableInfo[key]=disableInfo[key]<=0;
}

        return(
            <Auxiliary>
                <Burger  ingredients={this.state.ingredients}/>
                <BuildControls   ingredientAdded={this.addIngredientHandler}
                                 ingredientRemoved={this.removeIngredeint}
                                 disabled={disableInfo}
                                 purchaseable={this.state.purchaseable}
                                 price={this.state.totalPrice}
                />
            </Auxiliary>      
        );
    }
} 
export default BurgerBuilder;
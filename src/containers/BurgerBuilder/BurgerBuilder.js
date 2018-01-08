import React ,{Component} from "react";

import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../../src/axios.orders";


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
    purchaseable:false,
    purchasing:false,
    loading:false
};

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

        this.updatePurchaseState(updatedIngredients);
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

    this.updatePurchaseState(updatedIngredients);
}



// to check atleast we have one ingredient in burger

updatePurchaseState (ingredients) {
    const sum = Object.keys( ingredients )
        .map( igKey => {
            return ingredients[igKey];
        } )
        .reduce( ( sum, el ) => {
            return sum + el;
        }, 0 );
    this.setState( { purchasable: sum > 0 } );
}


purchaseHandler=()=>{
    this.setState({
        purchasing:true
    })
}


purchaseCancelHandler=()=>{
    this.setState({
        purchasing:false
    })
}


purchasecontinueHandler=()=>{
    //alert('You continue');
    this.setState({
        loading:true
    })
    const order={
        ingredients:this.state.ingredients,
        price:this.state.totalPrice,
        customer:{
            name:"chai",
            address:{
                street:"teststreet1",
                zipCode:'43214',
                country:'usa'
            },
            email:"test@test.com"
        },
        deliveryMethod:"fastest"
    }
    axios.post("/orders",order).then((response)=>{
            this.setState({
                loading:false
            });
    }).catch((err)=>{
        this.setState({
            loading:false
        });
    })

}

    render(){

        const disableInfo={
            ...this.state.ingredients
        };

        let orderSummary= <OrderSummary ingredients={this.state.ingredients}
                                purchaseCancelled={this.purchaseCancelHandler}
                                purchaseContinued={this.purchasecontinueHandler}
                                price={this.state.totalPrice}  
                            />

        if(this.state.loading){
            orderSummary=<Spinner />
        }

        for(let key in disableInfo){
            disableInfo[key]=disableInfo[key]<=0;
        }

            return(
                <Auxiliary>
                        
                        <Modal show={this.state.purchasing}   modalClosed={this.purchaseCancelHandler}>
                            {orderSummary}
                        </Modal>

                        <Burger  ingredients={this.state.ingredients}/>

                        <BuildControls   ingredientAdded={this.addIngredientHandler}
                                        ingredientRemoved={this.removeIngredeint}
                                        disabled={disableInfo}
                                        purchasable={this.state.purchasable}
                                        price={this.state.totalPrice} 
                                        ordered={this.purchaseHandler} 
                        />

                </Auxiliary>    
            );
    }
} 


export default withErrorHandler(BurgerBuilder,axios);
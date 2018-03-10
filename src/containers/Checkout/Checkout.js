import React, { Component } from 'react';
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from "./ContactData/ContactData";
import * as actions from "../../store/actions/index";


class Checkout extends Component {

componentWillMount(){
    this.props.onInitPurchase();
}

 
    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace( '/checkout/contact-data' );
    }

    render () {
        let summary=<Redirect to='/'/>
        if(this.props.ings){
            summary=(
               <div> 
                <CheckoutSummary
                ingredients={this.props.ings}
                checkoutCancelled={this.checkoutCancelledHandler}
                checkoutContinued={this.checkoutContinuedHandler} />
                <Route 
                path={this.props.match.path + '/contact-data'} 
                //render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.props.price} {...props} />)} 
                component={ContactData}
                />
              </div>  
            );
        }
        return summary;

    }
}


const mapStateToProps=(state)=>{
    return{
        ings:state.burgerBuilder.ingredients
        
    }
};


const mapDispatchToProps = (dispatch)=>{
    return{
        onInitPurchase:()=>{dispatch(actions.purchaseInit())}
    }
  };

export default connect(mapStateToProps,mapDispatchToProps)(Checkout);
import * as actionTypes from "./actionTypes";
import axios from "../../axios.orders";


export const purchaseBurgerPurchase=(id, orderData)=>{

    return{
        type:actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId:id,
        orderData:orderData
    };
};

export const purchaseBurgerFail=(error)=>{
    return{
        type:actionTypes.PURCHASE_BURGER_FAIL,
        error:error
    }
}


export const purchaseBurgerStart=()=>{
    return{
        type:actionTypes.PURCHASE_BURGER_START
    }
}


// async action...
export const purchaseBurger=(orderData)=>{
    return (dispatch)=>{
        dispatch(purchaseBurgerStart());
        axios.post( '/orders.json', orderData )
        .then( response => {
            // response data ----> id
            dispatch(purchaseBurgerPurchase(response.data.name,orderData));
        } )
        .catch( error => {
            dispatch(purchaseBurgerFail(error))
        } );
    }
}


// purchaseinti will be dispatch when the checkout is loaded....
export const purchaseInit=()=>{
    return{
        type:actionTypes.PURCHASE_INIT
    }
}


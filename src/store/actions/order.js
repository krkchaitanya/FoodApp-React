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


// async action...
export const purchaseBurgerStart=(orderData)=>{
    return (dispatch)=>{
        axios.post( '/orders.json', orderData )
        .then( response => {
            // response data ----> id
            dispatch(purchaseBurgerPurchase(response.data,orderData));
        } )
        .catch( error => {
            dispatch(purchaseBurgerFail(error))
        } );
    }
}


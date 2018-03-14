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


//................. async action......

export const purchaseBurger=(orderData)=>{
    return (dispatch)=>{
        dispatch(fetchOrdersStart());
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

// orders.......fetch from database...........

export const fetchOrderSuccess=(orders)=>{
    return{
        type:actionTypes.FETCH_ORDERS_SUCCESS,
        orders:orders
    }
};


export const fetchOrdersFail=(error)=>{
    return{
        type:actionTypes.FETCH_ORDERS_FAIL,
        error:error
    }
};


export const fetchOrdersStart=()=>{
    return{
        type:actionTypes.FETCH_ORDERS_START,

    }
};


// ------------asyns operation to fecth orders..............
// ---------------------------------------------------------

export const fetchOrders = () => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        axios.get( '/orders.json' )
            .then( res => {
                const fetchedOrders = [];
               
                for ( let key in res.data ) {
                    fetchedOrders.push( {
                        ...res.data[key],
                        id: key
                    } );
                }
                dispatch(fetchOrderSuccess(fetchedOrders));
            } )
            .catch( err => {
                dispatch(fetchOrdersFail(err));
            } );
    };
};
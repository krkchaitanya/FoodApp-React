import React, {Component} from "react";
import Button from "../../../components/UI/Button/Button"; 
import classes from "./ContactData.css";
import axios from "../../../axios.orders";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component{
state={
    name:'',
    email:"",
    address:{
        street:"",
        postalCode:""
    },
    loading:false
    }


orderHandler=(event)=>{
    event.preventDefault();
 console.log(this.props.ingredients);   
         alert('You continue!');
        this.setState( { loading: true } );
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Max Schwarzmüller',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '41351',
                    country: 'Germany'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post( '/orders.json', order )
            .then( response => {
                this.setState( { loading: false} );
                this.props.history.push('/');
            } )
            .catch( error => {
                this.setState( { loading: false } );
            } );
}

render(){

    let form=(
        <form>
                <input type="text" name="name" placeholder="Your Name"/><br/>
                <input type="email" name="email" placeholder="Your Email"/><br/>
                <input type="text" name="street" placeholder="Your street"/><br/>
                <input type="text" name="postalcode" placeholder="Postal code"/><br/><br/>
                <Button btnType="Success" clicked={this.orderHandler}>Orders</Button>
        </form> 
    );
    if(this.state.loading){
        form=<Spinner/>;
    }

    return(
        <div className={classes.ContactData}>
            <h4>Enter ur contact Data</h4>
            {form}   
        </div>   
    )
}

}

export default ContactData;
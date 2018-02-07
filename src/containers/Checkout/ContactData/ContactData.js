import React, {Component} from "react";
import Button from "../../../components/UI/Button/Button"; 
import classes from "./ContactData.css";
import axios from "../../../axios.orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component{
state={
    orderForm:{

        name:{
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder:'Your name'
            },
            value:''
        },
        street:{
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder:'Street name'
            },
            value:''
        },
        zipCode:{
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder:'zipcode'
            },
            value:''
        },
        country:{
            elementType:'input',
            elementConfi:{
                type:'text',
                placeholder:'country'
            },
            value:''    
        },
        email:{
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder:'Your email'
            },
            value:''
        },
        deliveryMethod:{
            elementType:'select',
            elementConfig:{
                options:[{value:'fastest', displayValue:'Fastest'},
                {value:'cheapest', displayValue:'Cheapest'}
            ]
            },
            value:''
        } 
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
            price: this.props.price
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
                <Input elementType="..." elementConfig="..."  value="..."/><br/>
                <Input inputtype="input" type="email" name="email" placeholder="Your Email"/><br/>
                <Input inputtype="input" type="text" name="street" placeholder="Your street"/><br/>
                <Input inputtype="input" type="text" name="postalcode" placeholder="Postal code"/><br/><br/>
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
import React ,{Component} from "react";
import Auxiliary from "../../hoc/Auxiliary";

class BurgerBuilder extends Component{
    render(){
        return(
            <Auxiliary>
                <div>Burger</div>
                <div>BuildControls</div>
            </Auxiliary>      
        );
    }
} 
export default BurgerBuilder;
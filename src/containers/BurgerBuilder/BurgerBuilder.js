import React ,{Component} from "react";

import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component{
    render(){
        return(
            <Auxiliary>
                <Burger/>
                <div>BuildControls</div>
            </Auxiliary>      
        );
    }
} 
export default BurgerBuilder;
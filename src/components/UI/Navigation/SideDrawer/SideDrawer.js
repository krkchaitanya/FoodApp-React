import React from "react";

import Logo from "./../../Logo/Logo";
import NaviagationItems from "../../Navigation/NavigationItems/NavigationItems";
import classes from "./SideDrawer.css";
import Backdrop from "../../../UI/Backdrop/Backdrop";
import Auxiliary from "../../../../hoc/Auxiliary";


const sideDrawer=(props)=>{
   return(
       <Auxiliary>
       <Backdrop show={props.open   } clicked={props.clicked}/>
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}>
            <Logo />
            </div>

            <nav>
                <NaviagationItems />
            </nav>
        </div>    
        </Auxiliary>
   )
}

export default sideDrawer;
import React from "react";

import Logo from "./../../Logo/Logo";
import NaviagationItems from "../../Navigation/NavigationItems/NavigationItems";
import classes from "./SideDrawer.css";
import Backdrop from "../../../UI/Backdrop/Backdrop";
import Auxiliary from "../../../../hoc/Auxiliary";


const sideDrawer=(props)=>{
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
   return(
       <Auxiliary>
         <Backdrop show={props.open} clicked={props.closed}/>
       <div className={attachedClasses.join(' ')}>
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
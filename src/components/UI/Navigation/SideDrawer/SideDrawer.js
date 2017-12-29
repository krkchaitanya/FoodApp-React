import React from "react";

import Logo from "./../../Logo/Logo";
import NaviagationItems from "../../Navigation/NavigationItems/NavigationItems";
import classes from "./SideDrawer.css";  


const sideDrawer=(props)=>{
   return(
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}>
            <Logo />
            </div>

            <nav>
                <NaviagationItems />
            </nav>
        </div>    
   )
}

export default sideDrawer;
import React from "react";
import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems=(props)=>{
    return(
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" exact>BurgerBuilder</NavigationItem>
            <NavigationItem link="/orders">Orders</NavigationItem>
        </ul>    
    )
}

export default navigationItems;
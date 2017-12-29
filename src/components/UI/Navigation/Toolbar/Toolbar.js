import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "./../NavigationItems/NavigationItems";

const toolbar =()=>{
return (
        <header className={classes.Toolbar}>
            <div>Menu</div>
            
            <div className={classes.Logo}>
            <Logo />
            </div>


            <nav>
                <NavigationItems/>
            </nav>    
        </header>

)
}

export default toolbar;
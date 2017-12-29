import React from "react";
import Auxiliary from "../../hoc/Auxiliary";
import classes from "./Layout.css";

import Toolbar from "../UI/Navigation/Toolbar/Toolbar";
import SideDrawer from "../UI/Navigation/SideDrawer/SideDrawer";

const layout=(props)=>{
    return (
    <Auxiliary>
        <Toolbar />
        <SideDrawer/>
        <main className={classes.Content}>
        {props.children}
        </main>
    </Auxiliary>
)
}

export default layout;
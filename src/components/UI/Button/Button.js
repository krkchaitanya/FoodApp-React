import React from "react";
import classes from './Button.css';

const button=(props)=>{
    return(
        <button onClick={props.clicked} className={[classes.button,classes[props.btnType]].join('')}>
            {props.children}
        </button>
    )
}

export default button;
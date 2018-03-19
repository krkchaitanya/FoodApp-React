import React from "react";
import classes from "./Order.css";

const order=(props)=>{

    const ingredients=[];

    for(let ingredientName in props.ingredients){
        ingredients.push({
                        name:ingredientName,
                        amount:props.ingredients[ingredientName]
                        })
    }

    const ingredientOutput=ingredients.map((ig)=>{
        return <span style={{
            textTransform:"capitalize",
            border:"1px solid grey",
            display:"inline-block",
            margin:"0 8px",
            padding:"5px",
            boxShadow:"0 1px 1px lightgrey"
        
        }}key={ig.name}>{ig.name}({ig.amount})</span>
    })

     return(
         <div className={classes.Order}>

             <p>Ingredients: {ingredientOutput}</p>
             <p>Price:<strong>USD {Number.parseFloat( props.price ).toFixed( 2 )}}</strong></p>
         </div>    
     )
}

export default order;
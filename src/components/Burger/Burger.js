import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";


const burger=(props)=>{

// Main logic in transforming obj to array .
// Object.keys() method is used to convert obj to array.
// Reduce method is used to convert an array with inner arr elements into single array of ele.

let transformedIngredients=Object.keys(props.ingredients).map((igKey)=>{
    // console.log(props.ingredients[igKey]);
    // console.log([...Array(props.ingredients[igKey])]);
    return [...Array(props.ingredients[igKey])].map((_,i)=>{
        return <BurgerIngredient key={igKey+i} type={igKey} />
    }) 
}).reduce((arr,el)=>{
    return arr.concat(el);
},[]);

console.log(transformedIngredients);

if(transformedIngredients.length===0){
    transformedIngredients=<p>Please start adding ingredients</p>
}

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>     
        </div>
    );
}

export default burger;
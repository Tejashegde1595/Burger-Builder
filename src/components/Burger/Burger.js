import React from 'react'
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';
import classes from '../Burger/burger.module.css';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';

const burger=(props)=>{
    let transformedIngredient = Object.keys(props.ingredients).map((igKey)=>{
        return [...Array(props.ingredients[igKey])].map((_,index)=>{
           return  <BurgerIngredient key={igKey+index} type={igKey}></BurgerIngredient>
        })
    }).reduce((arr,el)=>{
        return arr.concat(el);
    },[])
    if(transformedIngredient.length===0){
        transformedIngredient=<p>Please start adding ingredients!</p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {transformedIngredient}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    )
}

export default burger;
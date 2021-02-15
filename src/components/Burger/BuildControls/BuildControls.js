import React from 'react'
import classes from '../BuildControls/buildcontrols.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls=[
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Cheee',type:'cheese'},
    {label:'Meat',type:'meat'}
]

const buildControls=(props)=>{
    return(
        <div className={classes.BuildControls}>
            <p>Current Price:<strong>{props.price}</strong></p>
            {controls.map((ctrl)=>{
                return <BuildControl disabled = {props.disabled[ctrl.type]}
                 removed={()=>props.ingredientRemoved(ctrl.type)} 
                 added={()=>props.ingredientAdded(ctrl.type)} label={ctrl.label} 
                 key={ctrl.type}></BuildControl>
            })}
        </div>
    )
}

export default buildControls;
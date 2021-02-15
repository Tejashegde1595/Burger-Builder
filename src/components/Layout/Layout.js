import Aux from "../../hoc/Auxilary";
import React from 'react';
import classes from '../Layout/layout.module.css';
const layout=(props)=>{
    return(
        <Aux>
            <div>ToolBar,SideBar,Backdrop</div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
}

export default layout;
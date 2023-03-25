import React from "react";
import classes from "../styling/styling-modules/ContactUs.module.css"
import Inputs from "./Inputs";

let inState = true;

// dynamically changing the className
const ContactUs = ({closeHandler, isVisible})=> {
    let className = classes.dropdown_content;
    if(isVisible) {
        className += " " + classes.animateFromTopToBottom;
    } else if (!inState){
        className +=  " " + classes.animateFromBottomToTop;
    }else if(inState) {
        inState = false;
    }


debugger;
    return (
        <div className={className}>
            <div>
                <a 
                    className={classes.close_btn} 
                    onClick={closeHandler}>CLOSE
                </a>
                <h1 className={classes.heading}>Get In Touch</h1>
                <p className={classes.text}>We would love to hear from you for whatever reason!</p>
            </div>
            <Inputs/>
        </div>
    );
};

export default React.memo(ContactUs);

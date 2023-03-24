import React from 'react';
import classes from '../styling/styling-modules/AboutUs.module.css';
import Info from "./Info";

let inState = true;

const AboutUs = ({closeHandler, isVisible})=> {
    let className = classes.dropdown_content;

    if(isVisible) {
        className += " " + classes.animateFromTopToBottom;
    } else if (!inState){
        className +=  " " + classes.animateFromBottomToTop;
    } else if(inState) {
        inState = false;
    }

    return (
        <div className={className}>
            <a className={classes.close_btn} onClick={closeHandler}>CLOSE</a>
            <div className={classes.about_content}>
                <h1 className={classes.heading}>About Time UP</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                    Aenean
                    massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Donec quam
                    felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                    pede
                    justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
                    dapibus.
                    Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                </p>
            </div>
            <Info/>
        </div>
    )
};

export default React.memo(AboutUs);

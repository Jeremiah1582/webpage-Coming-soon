import React, {useCallback, useState} from 'react';
import ComingSoon from "./ComingSoon";
import TimeUp from "./TimeUp";
import ContentText from "./ContentText";
import Countdown from "./Countdown";
import SocialMedia from "./SocialMedia";
import AboutButton from "./AboutButton";
import ContactButton from "./ContactButton";
import classes from '../styling/styling-modules/MainPage.module.css';
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

const MainPage = ()=> {
    const [isAboutVisible, setIsAboutVisible]=useState(false);
    const [isContactVisible, setIsContactVisible]=useState(false);

    const showAboutComponent = useCallback(()=> {
        setIsAboutVisible(true);
    },[])

    const hideAboutComponent = useCallback(()=> {
        setIsAboutVisible(false);
    },[])

    const showContactComponent = useCallback(()=> {
        setIsContactVisible(true);
    },[]);

    const hideContactComponent = useCallback(()=> {
        setIsContactVisible(false);
    },[]);

    return (
        <div className={classes.container}>
            <ComingSoon />
            <TimeUp />
            <ContentText />
            <Countdown />
            <SocialMedia />
            <AboutUs
                isVisible={isAboutVisible}
                closeHandler={hideAboutComponent}
            />
            <AboutButton
                openHandler={showAboutComponent}
            />
            <ContactUs
                isVisible={isContactVisible}
                closeHandler={hideContactComponent}
            />
            <ContactButton
                openHandler={showContactComponent}
            />
        </div>
    )
}


export default MainPage;

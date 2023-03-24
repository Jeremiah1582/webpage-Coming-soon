import React from 'react';
import classes from '../styling/styling-modules/SocialMedia.module.css';

const SocialMedia = ()=> {
    return (
        <div className={classes.social_media}>
            <div>
                <a href='https://twitter.com/'>
                    <i className="fab fa-twitter"></i>
                </a>
                <a href='https://www.facebook.com/'>
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href='https://www.google.com/'>
                    <i className="fab fa-google-plus-g"></i>
                </a>
                <a href='https://www.instagram.com/'>
                    <i className="fab fa-instagram"></i>
                </a>
                <a href='https://www.linkedin.com/'>
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
        </div>
    );
}

export default SocialMedia;

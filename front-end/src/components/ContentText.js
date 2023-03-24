import classes from '../styling/styling-modules/ContentText.module.css'

const ContentText = ()=> {
    return (
        <div className={classes.content_text}>
            <h1 className={classes.heading}>AiMyApply.com</h1>
            <p>
             The one stop shop for your Job application process. AiMyApply.com supports all of your job application needs in one place. 
             Allowing you to simplify Your job application process making it fast and fruitful. 

             get in contact with us today and Sign up to our waiting list to get notified and special offers when we are online
             </p>
        </div>
    );
}

export default ContentText;

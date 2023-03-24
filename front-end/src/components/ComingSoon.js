import classes from '../styling/styling-modules/ComingSoon.module.css'

const ComingSoon = ()=> {
    return (
        <div className={classes.tm_object}>
            <div className={classes.object_rope}>
            </div>
            <div className={classes.object_shape}>
                <div className={classes.object_text}>
                    Coming <span>Soon</span>
                </div>

            </div>
        </div>
    );
}

export default ComingSoon;

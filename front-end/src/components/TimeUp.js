import classes from '../styling/styling-modules/TimeUp.module.css';

const TimeUp = ()=> {
    return (
        <div className={classes.timeUp_container}>
            <img alt='Time Up' src='https://www.saratechnologies.com/images/enterprise-solution-img.png'/>
            {/* <img alt='Time Up' src='https://mediamatrix.co.in/wp-content/uploads/2018/04/Social-Media-Marketing-1-768x560.png'/> */}
            {/* <img alt='Time Up' src='https://devloft.co.uk/images/main.png'/> */}
        </div>
    );
}

export default TimeUp;

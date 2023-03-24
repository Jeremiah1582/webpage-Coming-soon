import React from 'react';
import classes from '../styling/styling-modules/Info.module.css';

const Info = ()=> {
    return (
        <div className={classes.container}>
            <div className={classes.info_item}>
                <h3>Phone</h3>
                <p>
                    Phone: +49 1782822679<br />
                    {/* Mobile: (000) 654 0101 */}
                </p>
            </div>
            <div className={classes.info_item}>
                <h3>Email</h3>
                <p>
                    jeremiah.1582@googlemail.com<br />
                    info@aimyapply.com
                </p>
            </div>
            <div className={classes.info_item}>
                <h3>Address</h3>
                <p>
                    Berlin, Germany<br />
                    
                </p>
            </div>


        </div>
    );
};

export default Info;

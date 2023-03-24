import classes from '../styling/styling-modules/Inputs.module.css';

const Inputs = ()=> {
    return (
        <div className={classes.input_container}>
            <div className={classes.input_params}>
                <input name='name' type='text' placeholder='Your Name'/>
                <input name='name' type='text' placeholder='Phone Number'/>
            </div>
            <div className={classes.input_params}>
                <input name='name' type='text' placeholder='Email Address'/>
                <input name='name' type='text' placeholder='Subject'/>
            </div>
            <div className={classes.textarea_params}>
                <textarea name='message' placeholder='Message' className='textarea-group'></textarea>
            </div>
            <div className={classes.btn_params}>
                <button className={classes.send_btn} type="submit"> Send Message
                    <i className="fa fa-paper-plane"></i>
                </button>
                <p className="form_message"></p>
            </div>
        </div>
    );
}

export default Inputs;

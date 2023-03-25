import classes from '../styling/styling-modules/Inputs.module.css';
import axios from 'axios'
import {useState} from 'react'

const Inputs = ()=> {
    const [data, setData] = useState({
        name: "", 
        phone:"", 
        email:"", 
        subject:"",
        message:""
    })

    const handleInput=(e)=>{

        setData({...data,[e.target.name]:e.target.value})
        console.log(data);

    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios
        .post('http://localhost:8000/newStakeholder', data, {
            headers: {
                "Content-Type": " application/json"}
        })
        .then(doc=>{
           console.log(doc.data);
        }).catch(err=>{
                console.log('there was an error with the handle submit function', err)
                ;}
                )
        console.log('submit clicked');
    }


    return (
       
        <div className={classes.input_container}>
             <form onSubmit={handleSubmit} action="">
            <div className={classes.input_params}>
                <input onChange={handleInput}  name='name' type='text' placeholder='Your Name'/>
                <input onChange={handleInput}  name='phone' type='phone' placeholder='Phone Number'/>
            </div>
            <div className={classes.input_params}>
                <input onChange={handleInput} name='email' type='email' placeholder='Email Address'/>
                <input onChange={handleInput}  name='subject' type='text' placeholder='Subject'/>
            </div>
            <div className={classes.textarea_params}>
                <textarea onChange={handleInput}  name='message' placeholder='Message' className='textarea-group'></textarea>
            </div>
            <div className={classes.btn_params}>
                <button className={classes.send_btn} type="submit"> Send Message
                    <i className="fa fa-paper-plane"></i>
                </button>
                <p className="form_message"></p>
            </div>
           </form>
        </div>
      
    );
}

export default Inputs;

import React from "react";
import { useFormik } from 'formik';



const NewData =()=>{
const formik =useFormik({
    initialValues:{
        email:'',
        password:'',
        confirmpassword:'',
        firstname:'',
        lastname:''

    }
})

console.log(formik.values,"kvfghd")
    return(
       <div className="form_wrapper">
  <div className="form_container">
    <div className="title_container">
      <h2>Responsive Registration Form</h2>
    </div>
    <div className="row clearfix">
      <div className>
        <form>
          <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope" /></span>
            <input type="email" name="email" onChange={formik.handleChange} value={formik.values.email} placeholder="Email" required />
          </div>
          <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock" /></span>
            <input type="password" name="password" onChange={formik.handleChange} value={formik.values.password} placeholder="Password" required />
          </div>
          <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock" /></span>
            <input type="password" name="confirmpassword" onChange={formik.handleChange} value={formik.values.confirmpassword} placeholder="Re-type Password" required />
          </div>
          <div className="row clearfix">
            <div className="col_half">
              <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user" /></span>
                <input type="text" name="firstname" onChange={formik.handleChange}  value={formik.values.firstname}  placeholder="First Name" />
              </div>
            </div>
            <div className="col_half">
              <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user" /></span>
                <input type="text" name="lastname" onChange={formik.handleChange} value={formik.values.lastname} placeholder="Last Name" required />
              </div>
            </div>
          </div>
          <div className="input_field radio_option">
            <input type="radio" name="radiogroup1" id="rd1" />
            <label htmlFor="rd1">Male</label>
            <input type="radio" name="radiogroup1" id="rd2" />
            <label htmlFor="rd2">Female</label>
          </div>
          <div className="input_field select_option">
          </div></form>
      </div>
    </div>
  </div>
</div>
    )
}


export default NewData
import * as React from 'react';
import Box from '@mui/material/Box';
import {useState} from "react"
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {signin,authenticate} from "./helper"
import Message from "./message"
import "./signup.css"
import TextField from '@mui/material/TextField';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height : 500,
  bgcolor: '#fff',
  borderRadius : "20px",
  boxShadow: 24,
  p: 4,
};

const Signin = ({open , handleClose}) => {
	  const [values, setValues] = useState({
	    email: '',
	    password: '',
	    error: '',
	    loading: false,
	    didRedirect: false,
	    success : false,
  	});
  	const { email, password, error, loading, didRedirect ,success} = values
  	const handleChange = (name) => (event) => {
    	setValues({ ...values, error: false, [name]: event.target.value })
  	}
  	const onSubmit = (event) => {
  	    event.preventDefault()
  	    setValues({ ...values, error: false, loading: true })
  	    signin({ email, password })
  	     .then((data) => {
  	       if (data.error) {
  	         setValues({ ...values, error: data.error, loading: false })
  	       } else {
  	         authenticate(data, () => {
  	           setValues({
  	             ...values,
  	             success : "Sigin in successfully, Redirected to Home",
  	             didRedirect: true
  	           });
  	           window.location.href = "/"
  	         })
  	       }
  	     })
  	    .catch(console.log('signin request failed'))
  	 }
	 
	  return (
	    <div>
	      <Modal
	        open={open}
	        onClose={()=> {
	        	handleClose()
	        }}
	        aria-labelledby="modal-modal-title"
	        aria-describedby="modal-modal-description"
	      >
	        <Box sx={style} className="Hello">

	          <section className="vh-50" >
	            <div className="container h-80">
	            <Message open = {error} message = {error} severity = {"error"}/>
	            <Message open = {success} message = {success} severity = {"success"}/>
	              <div className="row d-flex justify-content-center align-items-center h-100">
	                <div className="col-lg-12 col-xl-11">
	                  <div className="card text-black" style={{borderRadius: "25px"}}>
	                    <div className="card-body p-md-5">
	                      <div className="row justify-content-center">
	                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

	                          <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 laura">Sign in</p>

	                          <form className="mx-1 mx-md-4">


	                            <div className="d-flex flex-row align-items-center mb-4">
	                              <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
	                              <div className="form-outline flex-fill mb-0"style = {{marginBottom : "10px"}}>
	                              	
	                                <TextField
	                                	label =" Your Email  :"
                                    onChange={handleChange('email')}
                                    value={email}
                                    className='form-control'
                                    type='email'
                                    variant ="filled"
                                  />
	                              </div>
	                            </div>

	                            <div className="d-flex flex-row align-items-center mb-4">
	                              <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
	                              <div className="form-outline flex-fill mb-0" style = {{marginBottom : "10px"}}>
	                                <TextField
	                                	label = " Password  : "
                                    onChange={handleChange('password')}
                                    value={password}
                                    className='form-control'
                                    type='password'
                                  />
	                                
	                              </div>
	                            </div>

	                            <div className="form-check d-flex justify-content-center mb-5" style = {{textAlign : "center"}}>
	                              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
	                              <label className="form-check-label laura" style = {{color : "black"}}>
	                                I agree all statements in <a href="#!">Terms of service</a>
	                              </label>
	                            </div>
	                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
	                              <Button style = {{backgroundColor : "#ed7e15",border : "1px solid red",padding : "8px",borderRadius : "5px",  width : "70%" , marginTop : "20px"}} onClick={onSubmit} variant = "filled" >Login</Button>
	                            </div>

	                          </form>

	                        </div>
	                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
	                          {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image"/> */}
	                        </div>
	                      </div>
	                    </div>
	                  </div>
	                </div>
	              </div>
	            </div>
	          </section>
	        </Box>
	      </Modal>
	    </div>
	  );
}
export default Signin;






import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import Message from "../auth/message"
import TextField from '@mui/material/TextField';

import { isAutheticated ,addProduct} from "../auth/helper";
import { Link } from "react-router-dom";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height : "70%",
  bgcolor: '#fff',
  borderRadius : "20px",
  boxShadow: 24,
  p: 4,
};
const AddMeal = ({open , handleClose}) => {

  const { user } = isAutheticated(); //Destructuring from Localstorage
  // const { username, email, _id } = user;
  const username = user?.username , email = user?.emai,_id = user?._id;

  const [values, setValues] = useState({ foodname: "", description: "", calorie : 0, error: "", success: false });

  const { foodname, description, calorie, error, success } = values;

  const handleChange = name => event => setValues({ ...values, error: false, [name]: event.target.value });

  const onSubmit = event => {
    console.log("onSubmit");
    event.preventDefault();
    setValues({ ...values, error: false });
    addProduct({ foodname, description, calorie, _id })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({ ...values, foodname: "", description: "", calorie: 0, error: "", success: "Mead Added Successfully"});
          setTimeout(() => {
            setValues({ ...values, foodname: "", description: "", calorie: 0, error: "", success: false});
          },1500);
        }
      })
      .catch(console.log("Error in adding meal"));
  };
  

  const signUpForm = () => {
    return (
      <div className="row">
        <Message open = {error} message = {error} severity = {"error"}/>
        <Message open = {success} message = {success} severity = {"success"}/>
        <div className="col-md-12 offset-sm-3 text-left">
          <form>
          <div style = {{ marginBottom : "10px"}}>
            <TextField label="Food Name" variant="filled" focused 
              onChange={handleChange("foodname")}
              type="text"
              id="fullWidth" 
              value={foodname}
            />
            </div>
            <div style = {{ marginBottom : "10px"}}>
            <TextField label="Description" variant="filled" focused 
              onChange={handleChange("description")}
              type="email"
              id="fullWidth" 
              value={description}
            />
            </div>

            <div style = {{ marginBottom : "10px"}}>
              <TextField label="Calorie" variant="filled" focused 
                style = {{width : "100%"}}
                onChange={handleChange("calorie")}
                className="form-control"
                type="Number"
                value={calorie}
              />
            </div>
             <Button onClick={onSubmit} variant="contained" href="#contained-buttons" style = {{marginLeft : "60px"}}>
              Submit
            </Button>
            
          </form>
        </div>
      </div>
    );
  };


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
          {signUpForm()}
        </Box>
      </Modal>
    </div>
  );
};

export default AddMeal;
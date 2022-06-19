import React, { useEffect } from 'react'

import { isAutheticated, SaveCalorieLimit } from '../auth/helper'
import { useState } from 'react'
import Info from "./Info"
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",
  height: "80%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  overflow : "auto",
  p: 4
}

const CalorieModal = ({ open, calorieLimit, handleCalorie, handleChange }) => {
  return (
    <div>
      <Modal
        open={open}
        //onClose={() => }}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2' style = {{textAlign : "center"}}>
            Enter your Today's calorie Limit
          </Typography>
          <div class='input-group' style={{ paddingTop: '40px' }} style = {{textAlign : "center"}}>
            <TextField
              type='number'
              value={calorieLimit}
              onChange={handleChange}
              class='form-control'
              min={0}
              variant = "filled"
            />
          </div>
          <div style={{ textAlign: 'center', paddingTop: '40px' }}>
            <Button onClick={handleCalorie} variant="contained" href="#contained-buttons" style = {{marginLeft : "20px",width :"120px"}}>
              Save
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

const DashBoard = ({open, handleClose}) => {
  const { user } = isAutheticated();
  console.log(user, 'was user')
  const { username, email, _id, calories_per_day, calorie_time } = user //Destructuring from Localstorage
  const [open2, setOpen2] = useState(false)
  const [calorieLimit, setCalorieLimit] = useState(0)
  const getCurrentLimit = () => {
    console.log(calories_per_day, 'is ', calorie_time)
    if (!calorie_time || !calories_per_day) {
      console.log('inside')
      return true
    }
    console.log(Date.now() - new Date(calorie_time), 'kjfrhk')
    let expire =
      Math.abs(Date.now() - new Date(calorie_time)) > 24 * 60 * 60 * 1000
    return expire
  }
  useEffect(() => {
    const data = getCurrentLimit()
    setOpen2(data)
  }, [])

  const handleCalorie = async () => {
    if (!calorieLimit || calorieLimit < 0) {
      return
    }
    const data = await SaveCalorieLimit(calorieLimit, user)
    console.log(data)
    //console.log(data, 'is new data')
    if (typeof window !== undefined) {
      const old = JSON.parse(window.localStorage.getItem('jwt'))
      old.user = data.user
      window.localStorage.setItem('jwt', JSON.stringify(old))
    }

    setCalorieLimit(0)
    setOpen2(false)
  }

  return (
    <div style = {{overflow : "auto"}}>
      <Modal
        open={open}
        onClose={()=> {
          handleClose()
        }}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <CalorieModal
            calorieLimit={calorieLimit}
            handleChange={(e) => setCalorieLimit(e.target.value)}
            open={open2}
            handleCalorie={handleCalorie}
          />
            <Info username={username} id={_id} />
        </Box>
      </Modal>
    </div>
  )
}

export default DashBoard
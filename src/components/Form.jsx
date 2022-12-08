import React from 'react'
import { Box, Typography } from '@mui/material'
import ProgressBar from './ProgressBar'
import UserInput from './UserInput'
const Form = () => {
    state = {
        step: 1
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

  return (
    <Box>
        <Typography>Get A Free Quote</Typography>
        <ProgressBar />
        <UserInput />
    </Box>
  )
}

export default Form
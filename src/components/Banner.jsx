import React from 'react'
import { Box, Typography } from '@mui/material'
import bannerImage from '/src/Images/bathrrom-design.jpg'

import { Detail } from './Detail'

const Banner = () => {
  return (
    <Box>
        <Typography>Your Dream Bathroom Installed in As Little As 1 Day!</Typography>
        <img src={bannerImage} alt='banner' style={{width: '500px'}}/>
        <Detail />
    </Box>
  )
}

export default Banner
import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import correctIcon from '/src/Images/correct-icon.png'

export const Detail = () => {
  return (
    <Box>
    <Stack direction='row'  alignItems='center' justifyContent='flex-start' spacing={1}>
        <img src={correctIcon} alt='correct-icon'  style={{width: '20px'}}/>
        <Typography>Complete FREE Quote - No Obligation</Typography>   
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='flex-start' spacing={1}>
        <img src={correctIcon} alt='correct-icon' style={{width: '20px'}}/>
        <Typography>Full Bathroom Remodels</Typography>   
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='flex-start' spacing={1}>
        <img src={correctIcon} alt='correct-icon' style={{width: '20px'}}/>
        <Typography>New Tub Installations</Typography>   
    </Stack>
    <Stack direction='row' alignItems='center' justifyContent='flex-start' spacing={1}>
        <img src={correctIcon} alt='correct-icon' style={{width: '20px'}}/>
        <Typography>New Shower Installations</Typography>   
    </Stack>   
    </Box>
  )
}

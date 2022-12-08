import React from 'react'
import { Box, Button, IconButton, Stack, Typography } from '@mui/material'

import Logo from '/src/Images/bathroom.png'
import CallIcon from '/src/Images/phonecall.png'

const Navbar = () => {
  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center' m='30px 50px' >
      <Stack direction='row' alignItems='center' justifyContent='flex-start' spacing={2}>
        <img src={Logo} alt='logo' style={{width: '48px'}} />
        <Stack direction='column'>
          <Typography component='h2' fontWeight='700'><span style={{color: '#FF7000'}}>HOUSTON</span> BATHROOM REMODELING</Typography>
          <Typography color={{color: '#c0bec0'}}>1-Day Bath Remodels</Typography>
        </Stack>
      </Stack>
      <Stack>
        <Button borderRadius='4px' sx={{color: '#fff', bgcolor: '#FF7000', height: '50px', width: '200px'}}>
            <IconButton sx={{bgcolor: '#FFF', height: '45px', width: '45px', borderRadius: '4px', pl: '0'}}>
            <img src={CallIcon} style={{height: '20px', width: '20px'}}/>
            </IconButton>
            <Typography variant='h6'>(855) 501-4469</Typography>
        </Button>
      </Stack>
    </Stack>
  )
}

export default Navbar
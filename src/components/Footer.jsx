import React from 'react'
import { Container, Box, Typography, Stack } from '@mui/material'

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#000' color='#FFF'>
      <Container>
        <Typography variant='p'>THIS SITE IS A FREE SERVICE TO ASSIST HOMEOWNERS IN CONNECTING WITH LOCAL SERVICE CONTRACTORS. ALL CONTRACTORS ARE INDEPENDENT AND THIS SITE DOES NOT WARRANT OR GURANTEE ANY WORK PERFORMED. IT IS THE RESPONSIBILITY OF HOME WONER TO VERIFY THAT THE HIRED CONTRACTOR FURNISHES THE NECESSARY LICENSE AND INSURANCE REQUIRED FOR THE WORK BEING PERFORMED. ALL PERSON DEPICTED IN A PHOTO OR VIDEO ARE ACTORS OR MODELS AND NOT CONTRACTORS LISTED ON THIS SITE</Typography>
        <Stack direction='row'>
          <Typography variant='p'>PRIVACY POLICY</Typography>
          <Typography variant='p'>CONTACT</Typography>
        </Stack>
        <Typography variant='p'>&copy; 2022 YOURDREAMBATHROOM.NET</Typography>
      </Container>
    </Box>
  )
}

export default Footer
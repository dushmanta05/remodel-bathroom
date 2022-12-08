import React from 'react'
import { Box, Stack, Container } from '@mui/material'

import Header from './Header'
import Banner from './Banner'
import Form from './Form'

const MainContent = () => {
  return (
      <Container>
        <Header />
        <Stack direction='row' alignItems='flex-start' justifyContent='space-around' >
          <Banner />
          <Form />
        </Stack>
      </Container>
  )
}

export default MainContent
import React from 'react'
import { Box } from '@mui/material'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MainContent from './components/MainContent'

const App = () => {
  return (
    <Box>
      <Navbar className='navbar'/>
      <MainContent />
      <Footer />
    </Box>
  )
}

export default App
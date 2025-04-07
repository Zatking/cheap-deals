import NavBar from '~/components/NavBar/NavBar'

import React from 'react'
import ProductCard from '~/components/ProductCard/ProductCard'
import HotSale from './HotSale/HotSale'
import ProductList from './ProductList/ProductList'
import Box from '@mui/material/Box'
import { Support } from '@mui/icons-material'
import SupportService from '~/components/SupportService/SupportService'
import ChatSupport from '~/components/SupportService/ChatSupport/ChatSupport'
function Home() {
  return (
    <Box>
      <NavBar></NavBar>

      <HotSale></HotSale>
      <ProductList></ProductList>
      <SupportService></SupportService>
    </Box>
  )
}

export default Home

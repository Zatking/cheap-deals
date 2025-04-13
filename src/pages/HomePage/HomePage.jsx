import NavBar from '~/components/NavBar/NavBar'
import Box from '@mui/material/Box'
import SupportService from '~/components/SupportService/SupportService'
import HotSale from './HotSale/HotSale'
import ProductList from './ProductList/ProductList'

function Home({ mockData }) {
  console.log('home', mockData)

  return (
    <Box>
      <NavBar></NavBar>

      <HotSale hotsale={mockData?.hotsale}></HotSale>
      <ProductList products={mockData?.products}></ProductList>
      <SupportService></SupportService>
    </Box>
  )
}

export default Home

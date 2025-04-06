import { Box, InputBase } from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'

function Search() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'white',
        px: 2,
        borderRadius: 2,
        height: 40
      }}
    >
      <SearchIcon color="action" />
      <InputBase placeholder="Search deals..." sx={{ ml: 1 }} />
    </Box>
  )
}

export default Search

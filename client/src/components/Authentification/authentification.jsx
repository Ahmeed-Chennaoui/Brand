import React from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Button, Divider } from '@mui/material';
const authentification = () => {
  return (
    <div>
      <AccountBoxIcon fontSize="large" />
      <span>Guest</span>
      <Divider/>
      <Button sx={{width: 100,}} variant="contained"> Login  </Button>
      <Button sx={{width: 100,}} variant="outlined">Register</Button>
      <Divider/>
    </div>
  )
}
export default authentification;
import { MenuItem, Paper, Select } from '@mui/material'

export default function SearchView({order,handleChange}){
  return (
    <Paper>
          <Select
          labelid="Order"
          id="selectOrder"
          value={order}
          onChange={handleChange}
        >
          <MenuItem key={1} value={"nouveaux en premier"} >nouveaux en premier</MenuItem>
          <MenuItem key={3} value={"prix croissant"} >prix croissant</MenuItem>
          <MenuItem key={4} value={"prix decroissant"} >prix decroissant</MenuItem>
        </Select>
    </Paper>
  )
}

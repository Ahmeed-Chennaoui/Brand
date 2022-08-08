import * as React from 'react';
import {
  useMediaQuery,
  useTheme
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import "./searchField.scss"

const SearchField = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
    { isMobile ? (
      <div className="searchbar_container">
      <SearchIcon fontSize='large' color='primary'/>
      </div>
    ) : (
      <div className="searchbar_container">
        <SearchIcon fontSize='large' color='primary'/>
        <input type="text" placeholder='Search ...' className='searchbar'/>
      </div>
    )}
  </>);
}
export default SearchField;
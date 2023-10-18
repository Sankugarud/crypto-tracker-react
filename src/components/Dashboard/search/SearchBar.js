import React from 'react'
import './searchBar.css'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({changeTheme,search, onsearch}) => {
   
  const backgroundColor = changeTheme ? 'white' : 'black';
  return (
    <div style={{backgroundColor}}>
        <div style={{backgroundColor}} className="serachFilter">
            <span className="search-icon"><SearchIcon/></span>
        <input style={{backgroundColor}} className='searchbar' value={search} onChange={(e)=>onsearch(e)} type="text" placeholder='Search'/>
        </div>
        
    </div>
  )
}

export default SearchBar
import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import './selectdays.css'
import FormControl from '@mui/material/FormControl';

 function Selectdays({changeTheme,days, handleChange}) {

  const backgroundColor = changeTheme ? 'white' : 'black';
  const textColor = changeTheme ? 'black' : 'white';
  return (
    
     <div className="select_days">
       
        <p style={{color:textColor}}>Change Days</p>
        <FormControl fullWidth>
        <InputLabel style={{color:textColor}} id="demo-simple-select-label">Days</InputLabel>
        <Select
            sx={{
                height: '2.5rem',
    color: textColor, // Text color
    backgroundColor: backgroundColor, // Background color
    borderColor: 'white',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: textColor,
    },
    '& .MuiSvgIcon-root': {
      color: textColor,
    },
    '&:hover': {
      '&& fieldset': {
        borderColor: '#red',
      },
    },
            }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="days"
          onChange={handleChange}
        >
          <MenuItem value={7}>7 Days</MenuItem>
          <MenuItem value={30}>30 Days</MenuItem>
          <MenuItem value={60}>60 Days</MenuItem>
          <MenuItem value={90}>90 Days</MenuItem>
          <MenuItem value={120}>120 Days</MenuItem>
          </Select>
        </FormControl>
    
     </div>
        

  );
}

export default Selectdays
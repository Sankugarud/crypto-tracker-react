import React, { useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './comparetwobtns.css'
import coins100 from '../../functions/coins100';

const ComaireTwobtns = ({changeTheme, coin1, coin2, handleChangecoin1,handleChangecoin2}) => {
  const [coins100fetch, setCoins100fetch] = useState([]);
  
  const backgroundColor = changeTheme ? 'white' : 'black';
  const textColor = changeTheme ? 'black' : 'white';

  const datafetch = async () => {
    const renderdata = await coins100();
    setCoins100fetch(renderdata);
  };
 


  useEffect(() => {
    datafetch();
  }, []);

  const style ={
    height: '2.5rem',
  color: textColor,
  borderColor: textColor,
  backgroundColor: backgroundColor,
  '&.MuiSelect-root': { 
    '& fieldset': {
      borderColor: 'white',
    },
  },
  '&:hover fieldset': {
    borderColor: 'blue',
  },
  '& .MuiSvgIcon-root': {
    color: textColor,
  },
  }

  return (
    <div >
      
      <div className="select-container">
        <div className="select1Component">
          <h4 style={{color:textColor}}>Crypto 1</h4>
          <Select
            sx={style}
            className="select1"
            labelId="coin1-label"
            id="coin1-select"
            value={coin1}
            onChange={ (e)=>handleChangecoin1(e, coin1)}
          >
            {coins100fetch.filter((coin)=>coin.id!== coin2).map((item, id) => (
              <MenuItem key={id} value={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </div>
      
        <div className="select1Component">
          <h4  style={{color:textColor}}>Crypto 2</h4>
          <Select
            sx={style}
            className="select1"
            labelId="coin2-label"
            id="coin2-select"
            value={coin2}
            onChange={(e)=>handleChangecoin2(e, coin2)}
          >
            {coins100fetch.filter((coin)=>coin.id!== coin1).map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </div>
      
      
      </div>
    </div>
  );
};

export default ComaireTwobtns;

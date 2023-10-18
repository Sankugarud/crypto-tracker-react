import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './changebtns.css';

function ChangeBtns({ priceType, handleChangePrice }) {

  return (
    <div className="btnschanger">
      <ToggleButtonGroup
        sx={{
          '& .Mui-selected': {
            color: '#3a80e9 !important',
          },
          borderColor: '#3a80e9 !important',
          '& .MuiToggleButtonGroup-grouped': {
            border: '1px solid #3a80e9 !important',
            borderColor: 'unset',
            color: '#3a80e9 !important',
          },
          '& .MuiToggleButtonGroup-standard': {
            color: '#3a80e9 !important',
          },
        }}
        color="primary"
        value={priceType}
        exclusive
        onChange={handleChangePrice}
        aria-label="Platform"
      >
        <ToggleButton value="prices">PRICE</ToggleButton>
        <ToggleButton value="market_caps">MKT CAP</ToggleButton>
        <ToggleButton value="total_volumes">VOLUME</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default ChangeBtns;
